---
title: "射出成形プロセスの基礎と国際標準：ISO 294 / ASTM D3641 / JIS / GB/T 17037 を実務で使い分ける"
title_zh: "注塑工艺基础与国际标准：ISO 294 / ASTM D3641 / JIS / GB/T 17037 实务对比"
title_en: "Injection Molding Process and International Standards: ISO 294 / ASTM D3641 / JIS / GB/T 17037"
excerpt: "射出成形を 6 工程で分解し、各工程で ISO 294、ASTM D3641、JIS、GB/T 17037 がどう規定しているかを整理。自動車 OEM が指定する成形条件報告の書き方も。"
excerpt_zh: "把注塑拆成 6 个工程，分别看 ISO 294、ASTM D3641、JIS、GB/T 17037 在每一步规定什么。附汽车 OEM 成形条件报告标准模板。"
excerpt_en: "Decompose injection molding into 6 stages, and see what ISO 294, ASTM D3641, JIS, and GB/T 17037 require at each. Includes automotive OEM processing report template."
date: 2026-08-20
lang: ja
category: "工程・標準"
tags: ["射出成形", "ISO 294", "ASTM D3641", "JIS", "GB/T 17037"]
draft: false
cover: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=600&fit=crop&auto=format&q=80"
---

## 射出成形は 6 工程である

OEM 担当者との打ち合わせで「射出成形で」と言うとき、両者の頭の中で 1 サイクルの中身が違います。標準化団体の定義では、射出成形は次の 6 工程に分解されます [1]。

```
1. 計量（plastication / metering）     溶融樹脂をスクリュー前端に送る
2. 射出（injection）                  溶融樹脂を金型キャビティに充填
3. 保圧（packing / holding）           キャビティ内の樹脂を圧縮し、収縮分を補給
4. 冷却（cooling）                    金型内で樹脂を固化
5. 取出（ejection）                   成形品を取り出す
6. 次サイクルの準備                  スクリュー後退・金型開閉など
```

この 6 工程の**温度・圧力・時間・速度**を、材料と金型に合わせてどう設定するかが、射出成形の核です。

## 国際 4 規格のカバー範囲

自動車 OEM との取引で一番困る「規格が複数ある問題」を、ISO / ASTM / JIS / GB の 4 体系で整理します。

| 規格 | 正式名称 | 適用範囲 | 注記 |
|---|---|---|---|
| ISO 294-1 | 熱可塑性試験片の射出成形—第 1 部：一般原則と多目的試験片 | 試験片作成 | 多目的 ISO 3167 A1/B1 型試験片を規定 [2] |
| ISO 294-2 | 同 第 2 部：小形引張試験片 | 小形試験片 | C 型金型、ISO 20753 CW13 試験片 [3] |
| ISO 294-3 | 同 第 3 部：小角板 | 平板試験片 | D1/D2 型金型、60×60 mm 板 |
| ISO 294-4 | 同 第 4 部：成形収縮率 | 収縮率測定 | 平行/垂直方向を定義 |
| ISO 294-5 | 同 第 5 部：異方性研究用 | 異方性 | F 型金型 80×120 mm [4] |
| ASTM D3641 | 熱可塑性試験片の射出成形標準実施規程 | 試験片作成 | ISO 294-1〜3 と等価を NOTE 1 で明記 [5] |
| JIS K 7100 | プラスチック—状態調節及び試験用標準ふん囲気 | 試験環境 | 23℃/50% RH が標準 |
| GB/T 17037.1-2019 | 熱塑性塑料注塑試样的制备 第 1 部分 | 試験片作成 | ISO 294-1:2017 を修改採用 [6] |
| GB/T 17037.2-2020 | 同 第 2 部分 | 小形試験片 | ISO 294-2:2018 を修改採用 |
| GB/T 17037.4-2003 | 同 第 4 部分 | 成形収縮率 | ISO 294-4:2001 を等同採用 |
| GB/T 17037.5-2020 | 同 第 5 部分 | 異方性 | ISO 294-5:2017 を修改採用 |

> 実質的に、ASTM D3641 = ISO 294-1〜3 + JIS K 7100（状態調節） + ISO 20753（試験片寸法） で構成されます。GB/T 17037 は 2017-2020 年に ISO 整合を完了し、殆どの試験データは 4 体系で互換です [7]。

## 6 工程と各規格の要求

工程別に「規格が要求する測定項目」を整理します。

### 計量工程（plastication）

- 計量精度：射出量の 0.1 g 単位
- 樹脂温度（メルト温度）：±3℃ 以内（ASTM D3641 §6.1.1）
- 背圧：0.5–2.0 MPa（PA66 など高粘度樹脂は 1.5 MPa 推奨）
- ショット量：成形機最大能力の 20–80% を使用（残材滞留を避ける） [5]

### 射出工程（injection）

- 射出速度：金型キャビティ容積とショット量から平均射出速度を算出
- 射出圧：金型センサー圧が 2% 以内の精度で管理
- スイッチオーバー点（V/P 切替）：速度制御から圧力制御へ移行するタイミング
- キャビティ圧力曲線：ピークを出さない、CPK ≥ 1.33 が量産合格条件

ASTM D3641 §6.1.1 は、射出速度・射出圧・計量時間の許容偏差を **±0.1 s / ±2% / ±5%** と厳格に定めています [5]。

### 保圧工程（holding/packing）

- 保圧圧：射出圧の 50–80% に下げる
- 保圧時間：ゲートシール時間 + 1 s が目安
- 型内圧力推移：ピークを出さず、CPK 1.33 以上

ISO 294-4 は保圧圧を 20 / 40 / 60 / 80 / 100 MPa の 5 段階から選ぶ方式を規定しています [8]。

### 冷却工程（cooling）

- 金型温度：材料ごとに推奨温度域（JIS K 7100 で 23℃/50% RH 状態調節が前提）
- 冷却時間：肉厚 1 mm あたり 5–8 s が目安
- 冷却不均一によるひずみ：異方性試験（ISO 294-5）で検出

### 取出工程（ejection）

- 突き出しピン径：成形品外形 × 0.6–0.8%
- 突き出し痕：金型 SPI-SPE A-3 以上（ASTM D3641 §6.2.4）
- 離型勾配：1° 以下（多目的試験片の中央肩は 2° 以下）

### 次サイクル準備

- 成形サイクルタイム：ゲートシールから次回のゲートシールまで
- 標準化団体は直接規定しないが、IATF 16949（自動車 QMS）は CPK と能力を要求

## 自動車 OEM が要求する成形条件報告

トヨタ、ホンダ、フォルクスワーゲンの Tier 1 サプライヤーは、量産開始時に **成形条件報告書（IM Report: Injection Molding Report）** の提出を要求します。以下の 13 項目は共通で、実装フォーマットは PPAP（Production Part Approval Process）でも同じです [9]。

1. 成形機メーカー・型番・最大クランプ力
2. ショット量（製品 + スパー + ランナー）
3. 樹脂メーカー・銘柄・ロット番号
4. 樹脂乾燥条件（温度・時間・露点）
5. ホッパー温度
6. バレル各部温度（後 / 中 / 前 / ノズル）
7. メルト温度（実測値）
8. 金型温度（実測、キャビティ / コア別）
9. 射出時間 / 保圧時間 / 冷却時間 / サイクルタイム
10. 射出圧 / 保圧圧（段数含む）
11. 射出速度（V/P 切替位置または時間）
12. 金型キャビティ圧（センサーチャンネル別）
13. 成形品重量 / 寸法（代表 5 個）

OEM 監査で「成形条件報告と量産中の CPK が連動しているか」を見られるため、**13 項目のうち少なくとも 8 項目は SPC（統計的工程管理）化**しておくのが現実的なラインです [10]。

## よくある失敗と規格の読み解き

### 「ショートショット」が頻発する

まず ISO 294-1 §6.2 の「キャビティ設計」を再確認。ゲート径がキャビティ厚の 2/3 以上、ゲート長さ 3 mm 以下が ASTM D3641 §6.2.3 の指針です [5]。金型が原因か材料が原因か切り分けるには、リブ入り試験片（ISO 294-5 F 型）で流動長を測るのが定石です。

### 「反り」が収まらない

異方性が原因のことが多い。ISO 294-5 の板試験片（80×120×2 mm）で機械的性質を MD（流動方向）と TD（直角方向）で測定。差が 30% を超える場合、GF 含有率・配向・残留応力のいずれかが支配因子です。GF 強化品では成形収縮率を 0.1% 刻みで測定（GB/T 17037.4）[6]。

### 「シルバー streak」が発生した

ASTM D3641 §6.1.1 のメルト温度管理（±3℃）から外れていないか、乾燥不足か、ベント不良の 3 つに原因が絞れます。1 次切り分けは、材料メーカーの推奨乾燥条件（例：PA66 は 85℃ × 4 時間）からの逸脱幅。

## 量産時のスペック公開

OEM から量産許可をもらう前に、**ISO 準拠の試験片で物性表**を出すのが業界の慣例です。手順は：

1. ISO 3167 準拠の多目的試験片（A1 型）を作製（ISO 294-1）
2. 23℃ / 50% RH で 88 時間状態調節（JIS K 7100）
3. ASTM D638（引張）、D790（曲げ）、D256（アイゾット衝撃）、D648（HDT）、D955（成形収縮率）の 5 試験を実施
4. 5 バッチ × 5 個体のデータで SPC 評価、CPK 1.33 以上を確認
5. PPAP レベル 3 として OEM に提出

このデータがあれば、量産中の CPK 低下時にも「材料メーカー公表値」と比較して迅速に原因切り分けができます [11]。

## まとめ

- 射出成形は計量・射出・保圧・冷却・取出・次サイクルの 6 工程に分解できる
- 国際 4 規格（ISO 294 / ASTM D3641 / JIS / GB/T 17037）はほぼ整合しており、ASTM D3641 = ISO 294-1〜3 + 状態調節規格の構成
- 自動車 OEM 監査では 13 項目の成形条件報告が標準、量産中はその SPC 維持が要求される
- トラブル時は規格該当条項を引いて原因切り分け、再発防止は PPAP データで固める

規格は「知っているか知らないか」で品質差が出る領域です。東莞工場で新規金型を立ち上げる際は、ISO 294-1 と ASTM D3641 の 2 つを PDF で開いてから条件出しに入るのが、社内ルールになっています。

## 参考文献

1. ISO 294-1:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 1: General principles, and moulding of multipurpose and bar test specimens*, ISO
2. ISO 3167:2014, *Plastics — Preparation and use of multipurpose test specimens*, ISO
3. ISO 294-2:2018, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 2: Small tensile bars*, ISO
4. ISO 294-5:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 5: Preparation of standard specimens for investigating anisotropy*, ISO
5. ASTM D3641-15, *Standard Practice for Injection Molding Test Specimens of Thermoplastic Molding and Extrusion Materials*, ASTM International
6. GB/T 17037.1-2019, *塑料 热塑性塑料材料注塑试样的制备 第 1 部分：一般原理*, 国家标准化管理委員会
7. ISO 1043-1:2011, *Plastics — Symbols and abbreviated terms*, ISO
8. ISO 294-4:2001, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 4: Determination of moulding shrinkage*, ISO
9. IATF 16949:2016, *Quality management system requirements for automotive production and relevant service parts organisations*, IATF
10. AIAG PPAP 4th Edition (2006), *Production Part Approval Process*, Automotive Industry Action Group
11. JIS K 7100:1999, *プラスチック—状態調節及び試験用標準ふん囲気*, 日本工業標準調査会
12. GB/T 17037.5-2020, *塑料 热塑性塑料材料注塑试样的制备 第 5 部分：各向异性研究用标准试样的制备*, 国家标准化管理委員会
