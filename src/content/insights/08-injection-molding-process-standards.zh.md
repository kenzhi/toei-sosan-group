---
title: "注塑工艺基础与国际标准:ISO 294 / ASTM D3641 / JIS / GB/T 17037 实务对比"
title_zh: "注塑工艺基础与国际标准:ISO 294 / ASTM D3641 / JIS / GB/T 17037 实务对比"
title_en: "Injection Molding Process and International Standards: ISO 294 / ASTM D3641 / JIS / GB/T 17037"
excerpt: "把注塑拆成 6 个工程,分别看 ISO 294、ASTM D3641、JIS、GB/T 17037 在每一步规定什么。附汽车 OEM 成形条件报告标准模板。"
excerpt_zh: "把注塑拆成 6 个工程,分别看 ISO 294、ASTM D3641、JIS、GB/T 17037 在每一步规定什么。附汽车 OEM 成形条件报告标准模板。"
excerpt_en: "Decompose injection molding into 6 stages, and see what ISO 294, ASTM D3641, JIS, and GB/T 17037 require at each. Includes automotive OEM processing report template."
date: 2026-08-20
lang: zh
category: "工程・标准"
tags: ["注塑", "ISO 294", "ASTM D3641", "JIS", "GB/T 17037"]
draft: false
cover: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=600&fit=crop&auto=format&q=80"
---

## 注塑是 6 个工程

OEM 对接会上说"注塑"时,双方脑子里一个循环的内容其实不一样。标准组织的定义里,注塑被拆成下面 6 个工程 [1]。

```
1. 计量(plastication / metering)     把熔融树脂送到螺杆前端
2. 注射(injection)                  把熔融树脂填入模具型腔
3. 保压(packing / holding)           压缩型腔内树脂,补足收缩
4. 冷却(cooling)                    在模具内固化树脂
5. 取出(ejection)                   取出成型品
6. 下个循环准备                     螺杆后退、模具开合等
```

这 6 个工程的**温度、压力、时间、速度**怎么按材料和模具设定,才是注塑的核心。

## 国际 4 大标准覆盖范围

汽车 OEM 合作里最烦的"标准不统一"问题,按 ISO / ASTM / JIS / GB 4 个体系整理如下。

| 标准 | 正式名称 | 适用范围 | 备注 |
|---|---|---|---|
| ISO 294-1 | 热塑性试样注塑—第 1 部分:一般原则及多用途试样 | 试样制备 | 规定多用途 ISO 3167 A1/B1 型试样 [2] |
| ISO 294-2 | 同 第 2 部分:小拉伸试样 | 小试样 | C 型模具,ISO 20753 CW13 试样 [3] |
| ISO 294-3 | 同 第 3 部分:小角板 | 板状试样 | D1/D2 型模具,60×60 mm 板 |
| ISO 294-4 | 同 第 4 部分:成型收缩率 | 收缩率测定 | 规定平行/垂直方向 |
| ISO 294-5 | 同 第 5 部分:各向异性研究用 | 各向异性 | F 型模具 80×120 mm [4] |
| ASTM D3641 | 热塑性试样注塑标准实施规程 | 试样制备 | NOTE 1 明确说明与 ISO 294-1～3 等效 [5] |
| JIS K 7100 | 塑料—状态调节及试验用标准环境 | 试验环境 | 23℃/50% RH 为标准 |
| GB/T 17037.1-2019 | 热塑性塑料注塑试样的制备 第 1 部分 | 试样制备 | 修改采用 ISO 294-1:2017 [6] |
| GB/T 17037.2-2020 | 同 第 2 部分 | 小试样 | 修改采用 ISO 294-2:2018 |
| GB/T 17037.4-2003 | 同 第 4 部分 | 成型收缩率 | 等同采用 ISO 294-4:2001 |
| GB/T 17037.5-2020 | 同 第 5 部分 | 各向异性 | 修改采用 ISO 294-5:2017 |

> 实际上 ASTM D3641 = ISO 294-1～3 + JIS K 7100(状态调节) + ISO 20753(试样尺寸)的组合。GB/T 17037 在 2017–2020 年完成了与 ISO 的整合,绝大部分试验数据在 4 个体系间可互换 [7]。

## 6 工程与各标准要求

按工程整理"标准要求的检测项目"。

### 计量工程(plastication)

- 计量精度:注塑量的 0.1 g 单位
- 树脂温度(熔体温度):±3℃ 以内(ASTM D3641 §6.1.1)
- 背压:0.5–2.0 MPa(PA66 等高粘度树脂建议 1.5 MPa)
- 射出量:使用成型机最大能力的 20–80%(避免残料滞留) [5]

### 注射工程(injection)

- 注射速度:由模具型腔容积和注塑量算出平均注射速度
- 注射压:模具传感器压力 2% 精度内管理
- V/P 切换点:从速度控制切换到压力控制的时点
- 型腔压力曲线:不出峰,CPK ≥ 1.33 是量产合格门槛

ASTM D3641 §6.1.1 严格规定注射速度、注射压、计量时间的允差为 **±0.1 s / ±2% / ±5%** [5]。

### 保压工程(holding/packing)

- 保压压:降到注射压的 50–80%
- 保压时间:浇口凝固时间 + 1 s 为准
- 型腔内压力推移:不出峰,CPK 1.33 以上

ISO 294-4 规定保压压从 20 / 40 / 60 / 80 / 100 MPa 5 个阶段中选 [8]。

### 冷却工程(cooling)

- 模具温度:按材料推荐温度区间(JIS K 7100 规定 23℃/50% RH 状态调节为前提)
- 冷却时间:壁厚每 1 mm 5–8 s
- 冷却不均导致的变形:靠各向异性试验(ISO 294-5)检测

### 取出工程(ejection)

- 顶杆直径:成型品外形 × 0.6–0.8%
- 顶出痕:模具 SPI-SPE A-3 以上(ASTM D3641 §6.2.4)
- 脱模斜度:1° 以下(多用途试样中央肩部 2° 以下)

### 下个循环准备

- 成型循环时间:从浇口凝固到下次浇口凝固
- 标准组织不直接规定,但 IATF 16949(汽车 QMS)要求 CPK 和能力指数

## 汽车 OEM 要求的成形条件报告

丰田、本田、大众的 Tier 1 供应商在量产开始时要求提交**成形条件报告(IM Report: Injection Molding Report)**。下面 13 项是共通项,实际格式和 PPAP(生产件批准程序)一致 [9]。

1. 成型机厂家、型号、最大锁模力
2. 射出量(产品 + 流道 + 浇口)
3. 树脂厂家、牌号、批号
4. 树脂干燥条件(温度、时间、露点)
5. 料斗温度
6. 料筒各段温度(后 / 中 / 前 / 喷嘴)
7. 熔体温度(实测值)
8. 模具温度(实测,型腔 / 型芯分别)
9. 注射时间 / 保压时间 / 冷却时间 / 循环时间
10. 注射压 / 保压压(含段数)
11. 注射速度(V/P 切换位置或时间)
12. 模具型腔压力(按传感器通道)
13. 成型品重量 / 尺寸(代表 5 件)

OEM 审核会看"成形条件报告和量产中的 CPK 是否联动",所以**13 项里至少 8 项要纳入 SPC(统计过程控制)**才是产线现实 [10]。

## 常见问题与标准解读

### "缺料"频发

先看 ISO 294-1 §6.2 的"型腔设计"重新校核。浇口径为型腔厚度的 2/3 以上、浇口长度 3 mm 以下是 ASTM D3641 §6.2.3 的指引 [5]。要分清是模具问题还是材料问题,用含筋试样(ISO 294-5 F 型)测流动长度是定式。

### "翘曲"压不下来

大多源自各向异性。用 ISO 294-5 的板状试样(80×120×2 mm)在 MD(流动方向)和 TD(垂直方向)分别测力学性能,差值超过 30% 时,玻纤含量、取向、残余应力三者是主导因素。玻纤增强品的成型收缩率按 0.1% 步进测量(GB/T 17037.4)[6]。

### "银纹"出现

从 ASTM D3641 §6.1.1 的熔体温度管理(±3℃)是否偏离、干燥不足、排气不良这 3 个方向排查。首要切分点是看是否偏离材料厂家推荐干燥条件(如 PA66 是 85℃ × 4 小时)。

## 量产时规格公开

拿到 OEM 量产许可前,**按 ISO 标准试样出具物性表**是行业惯例。流程是:

1. 按 ISO 3167 多用途试样(A1 型)制备(ISO 294-1)
2. 23℃ / 50% RH 状态调节 88 小时(JIS K 7100)
3. 实施 ASTM D638(拉伸)、D790(弯曲)、D256(Izod 冲击)、D648(HDT)、D955(成型收缩率)5 项试验
4. 用 5 批次 × 5 个体的数据做 SPC 评估,确认 CPK 1.33 以上
5. 作为 PPAP 等级 3 提交给 OEM

有了这套数据,量产中 CPK 下降时可以直接对照"材料厂家公布值"快速切分原因 [11]。

## 小结

- 注塑可拆为计量、注射、保压、冷却、取出、下循环准备 6 个工程
- 国际 4 标准(ISO 294 / ASTM D3641 / JIS / GB/T 17037)已基本一致,ASTM D3641 = ISO 294-1～3 + 状态调节标准
- 汽车 OEM 审核以 13 项成形条件报告为标准,量产中要求维持其 SPC
- 出问题时按标准对应条款切分原因,防止复发靠 PPAP 数据固化

标准是"懂不懂"就能拉开品质差的领域。东莞工厂新开模具时,社内规矩是先把 ISO 294-1 和 ASTM D3641 两份 PDF 打开,再开始定条件。

## 参考文献

1. ISO 294-1:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 1: General principles, and moulding of multipurpose and bar test specimens*, ISO
2. ISO 3167:2014, *Plastics — Preparation and use of multipurpose test specimens*, ISO
3. ISO 294-2:2018, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 2: Small tensile bars*, ISO
4. ISO 294-5:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 5: Preparation of standard specimens for investigating anisotropy*, ISO
5. ASTM D3641-15, *Standard Practice for Injection Molding Test Specimens of Thermoplastic Molding and Extrusion Materials*, ASTM International
6. GB/T 17037.1-2019, *塑料 热塑性塑料材料注塑试样的制备 第 1 部分:一般原理*, 国家标准化管理委員会
7. ISO 1043-1:2011, *Plastics — Symbols and abbreviated terms*, ISO
8. ISO 294-4:2001, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 4: Determination of moulding shrinkage*, ISO
9. IATF 16949:2016, *Quality management system requirements for automotive production and relevant service parts organisations*, IATF
10. AIAG PPAP 4th Edition (2006), *Production Part Approval Process*, Automotive Industry Action Group
11. JIS K 7100:1999, *プラスチック—状態調節及び試験用標準ふん囲気*, 日本工業標準調査会
12. GB/T 17037.5-2020, *塑料 热塑性塑料材料注塑试样的制备 第 5 部分:各向异性研究用标准试样的制备*, 国家标准化管理委員会
