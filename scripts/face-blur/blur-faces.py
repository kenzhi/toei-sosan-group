#!/usr/bin/env python3
"""
Face privacy v6 — eye-confirmed detection.
After finding candidate face boxes, run eye cascade inside the box.
If at least 1 eye is detected, the box is a real face.
If no eyes found, it's a false positive (arm/product/etc) and is skipped.
This dramatically reduces over-blur of arms, products, and equipment.
"""
from pathlib import Path
import cv2
import numpy as np

SRC_DIR = Path("/Volumes/办公专用/电脑盘/网站项目/日本公司官网/材料/素材")
DST_DIR = SRC_DIR / "face-blurred"
DST_DIR.mkdir(exist_ok=True)
CASCADE_DIR = Path("/tmp/cascades")

frontal = cv2.CascadeClassifier(str(CASCADE_DIR / "haarcascade_frontalface_default.xml"))
profile = cv2.CascadeClassifier(str(CASCADE_DIR / "haarcascade_profileface.xml"))
eye = cv2.CascadeClassifier(str(CASCADE_DIR / "haarcascade_eye.xml"))
print(f"Frontal: {not frontal.empty()}, Profile: {not profile.empty()}, Eye: {not eye.empty()}")

def nms(boxes, overlap_thresh=0.2):
    if not boxes:
        return []
    boxes = np.array(boxes, dtype=int)
    x1, y1, x2, y2 = boxes[:,0], boxes[:,1], boxes[:,0]+boxes[:,2], boxes[:,1]+boxes[:,3]
    area = (x2-x1) * (y2-y1)
    idxs = np.argsort(area)
    pick = []
    while len(idxs):
        last = idxs[-1]; pick.append(last)
        idxs = idxs[:-1]
        if len(idxs) == 0: break
        xx1 = np.maximum(x1[last], x1[idxs])
        yy1 = np.maximum(y1[last], y1[idxs])
        xx2 = np.minimum(x2[last], x2[idxs])
        yy2 = np.minimum(y2[last], y2[idxs])
        w = np.maximum(0, xx2 - xx1)
        h = np.maximum(0, yy2 - yy1)
        overlap = (w * h) / area[idxs]
        idxs = np.delete(idxs, np.where(overlap > overlap_thresh)[0])
    return [tuple(map(int, boxes[i])) for i in pick]

def is_face_like(box, img_min_dim):
    x, y, w, h = box
    if w < 50 or h < 50:
        return False
    max_dim = img_min_dim * 0.30  # face <= 30% of min image dim
    if w > max_dim or h > max_dim:
        return False
    ratio = w / h
    if ratio < 0.65 or ratio > 1.5:
        return False
    return True

def has_eyes(img, box):
    """Check if eyes are detected inside the candidate face box.
    Returns True if at least 1 eye is found, indicating a real face.
    """
    x, y, w, h = box
    # Look in the upper 60% of the face box (where eyes should be)
    eye_region_y_end = y + int(h * 0.6)
    eye_region = img[y:eye_region_y_end, x:x+w]
    if eye_region.size == 0:
        return False
    gray = cv2.cvtColor(eye_region, cv2.COLOR_BGR2GRAY)
    gray = cv2.equalizeHist(gray)
    # Upscale small eye regions for better detection
    eh, ew = gray.shape
    if min(eh, ew) < 100:
        scale = 100.0 / min(eh, ew)
        gray = cv2.resize(gray, (int(ew*scale), int(eh*scale)))
    eyes = eye.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3,
                                  minSize=(15, 15), flags=cv2.CASCADE_SCALE_IMAGE)
    return len(eyes) >= 1

def detect_faces(img):
    h, w = img.shape[:2]
    min_dim = min(h, w)
    scale = max(1.0, 1400.0 / min_dim)
    big = cv2.resize(img, (int(w*scale), int(h*scale))) if scale > 1.01 else img
    gray = cv2.cvtColor(big, cv2.COLOR_BGR2GRAY)
    gray = cv2.equalizeHist(gray)
    candidates = []
    b = frontal.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4,
                                  minSize=(40, 40), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(b): candidates.extend(b.tolist())
    b = profile.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4,
                                  minSize=(40, 40), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(b): candidates.extend(b.tolist())
    gray_flip = cv2.flip(gray, 1)
    b = profile.detectMultiScale(gray_flip, scaleFactor=1.05, minNeighbors=4,
                                  minSize=(40, 40), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(b):
        for x, y, ww, hh in b:
            x_mirror = gray_flip.shape[1] - x - ww
            candidates.append([x_mirror, y, ww, hh])
    if not candidates:
        return []
    candidates = [[int(c/scale) for c in b] for b in candidates]
    # Filter by shape
    candidates = [b for b in candidates if is_face_like(b, min_dim)]
    # Eye confirmation: only keep boxes with eyes
    confirmed = [b for b in candidates if has_eyes(img, b)]
    return nms(confirmed, overlap_thresh=0.2)

def obscure_face(img, box):
    x, y, w, h = box
    H, W = img.shape[:2]
    pad_w = int(w * 0.25)
    pad_h = int(h * 0.30)
    x1 = max(0, x - pad_w)
    y1 = max(0, y - pad_h)
    x2 = min(W, x + w + pad_w)
    y2 = min(H, y + h + pad_h)
    roi = img[y1:y2, x1:x2]
    if roi.size == 0:
        return
    rh, rw = roi.shape[:2]
    blurred = cv2.GaussianBlur(roi, (0, 0), sigmaX=30, sigmaY=30)
    if rh >= 14 and rw >= 14:
        small = cv2.resize(roi, (max(1, rw//14), max(1, rh//14)), interpolation=cv2.INTER_LINEAR)
        mosaic = cv2.resize(small, (rw, rh), interpolation=cv2.INTER_NEAREST)
        out = cv2.addWeighted(blurred, 0.5, mosaic, 0.5, 0)
    else:
        out = blurred
    img[y1:y2, x1:x2] = out

def process_one(src_path, dst_path):
    img = cv2.imread(str(src_path))
    if img is None:
        return 0, []
    boxes = detect_faces(img)
    for box in boxes:
        obscure_face(img, box)
    cv2.imwrite(str(dst_path), img, [cv2.IMWRITE_JPEG_QUALITY, 95])
    return len(boxes), boxes

def main():
    files = sorted([p for p in SRC_DIR.glob("*.jpg") if not p.name.startswith("._")])
    print(f"\nFound {len(files)} source photos\n")
    print(f"{'file':<22} {'faces':>6}  {'sizes'}")
    print("-" * 70)
    grand = 0
    for p in files:
        dst = DST_DIR / p.name
        try:
            n, all_boxes = process_one(p, dst)
            top = sorted(all_boxes, key=lambda b: -b[2])[:5]
            sizes = ", ".join(f"{b[2]}x{b[3]}" for b in top)
            print(f"{p.name:<22} {n:>6}  {sizes[:50]}")
            grand += n
        except Exception as e:
            print(f"  ERROR {p.name}: {e}")
    print("-" * 70)
    print(f"{'TOTAL':<22} {grand:>6}")

if __name__ == "__main__":
    main()
