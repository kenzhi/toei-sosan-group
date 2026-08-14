---
title: "Injection molding process and international standards: ISO 294, ASTM D3641, JIS, GB/T 17037 in practice"
title_zh: "注塑工艺基础与国际标准：ISO 294 / ASTM D3641 / JIS / GB/T 17037 实务对比"
title_en: "Injection molding process and international standards: ISO 294, ASTM D3641, JIS, GB/T 17037 in practice"
excerpt: "Injection molding broken into six stages, with what ISO 294, ASTM D3641, JIS, and GB/T 17037 require at each. Includes the 13-line processing report template that automotive OEMs ask for."
excerpt_zh: "把注塑拆成 6 个工程，分别看 ISO 294、ASTM D3641、JIS、GB/T 17037 在每一步规定什么。附汽车 OEM 成形条件报告标准模板。"
excerpt_en: "Injection molding broken into six stages, with what ISO 294, ASTM D3641, JIS, and GB/T 17037 require at each. Includes the 13-line processing report template that automotive OEMs ask for."
date: 2026-08-20
lang: en
category: "Process & Standards"
tags: ["Injection Molding", "ISO 294", "ASTM D3641", "JIS", "GB/T 17037"]
draft: false
cover: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=600&fit=crop&auto=format&q=80"
---

## Injection molding in six stages

When an OEM contact says "we do injection molding," the picture in their head and the picture in yours are usually not the same. The standards bodies break injection molding into the following six stages [1].

```
1. Plastication / metering     Convey melted resin to the screw front
2. Injection                    Fill the mold cavity with melted resin
3. Packing / holding            Compress the resin in the cavity, replenishing shrinkage
4. Cooling                      Solidify the resin inside the mold
5. Ejection                     Remove the molded part
6. Cycle preparation            Screw retract, mold open/close, etc.
```

Setting the **temperature, pressure, time, and speed** across these six stages to match the material and the mold — that is the core of injection molding.

## The four international standards at a glance

The "multiple standards" problem shows up most often in automotive OEM work. Here is how ISO / ASTM / JIS / GB cover it.

| Standard | Title | Scope | Note |
|---|---|---|---|
| ISO 294-1 | Plastics — Injection moulding of test specimens of thermoplastic materials — Part 1: General principles, and moulding of multipurpose and bar test specimens | Test specimen preparation | Defines the multipurpose ISO 3167 A1/B1 specimens [2] |
| ISO 294-2 | Part 2: Small tensile bars | Small specimens | Type C mold, ISO 20753 CW13 specimens [3] |
| ISO 294-3 | Part 3: Small plates | Plaque specimens | D1/D2 type mold, 60×60 mm plate |
| ISO 294-4 | Part 4: Moulding shrinkage | Shrinkage measurement | Defines parallel and perpendicular directions |
| ISO 294-5 | Part 5: For anisotropy studies | Anisotropy | Type F mold, 80×120 mm [4] |
| ASTM D3641 | Standard Practice for Injection Molding Test Specimens of Thermoplastic Molding and Extrusion Materials | Test specimen preparation | Note 1 confirms equivalence to ISO 294-1 through -3 [5] |
| JIS K 7100 | Plastics — Standard atmospheres for conditioning and testing | Test environment | 23 °C / 50% RH baseline |
| GB/T 17037.1-2019 | Plastics — Preparation of injection-moulded test specimens of thermoplastic materials — Part 1 | Test specimen preparation | Modified adoption of ISO 294-1:2017 [6] |
| GB/T 17037.2-2020 | Part 2 | Small specimens | Modified adoption of ISO 294-2:2018 |
| GB/T 17037.4-2003 | Part 4 | Moulding shrinkage | Equivalent adoption of ISO 294-4:2001 |
| GB/T 17037.5-2020 | Part 5 | Anisotropy | Modified adoption of ISO 294-5:2017 |

> In practice, ASTM D3641 = ISO 294-1 through -3 + JIS K 7100 (conditioning) + ISO 20753 (specimen geometry). GB/T 17037 completed alignment with ISO between 2017 and 2020, so test data is largely interchangeable across the four systems [7].

## What each stage requires, standard by standard

### Plastication (metering)

- Metering precision: 0.1 g resolution on shot weight
- Melt temperature: within ±3 °C (ASTM D3641 §6.1.1)
- Back pressure: 0.5–2.0 MPa (1.5 MPa recommended for high-viscosity resins like PA66)
- Shot size: 20–80% of machine max shot volume (to avoid residence time) [5]

### Injection

- Injection speed: derived from cavity volume and shot size
- Injection pressure: cavity sensor pressure controlled within 2%
- V/P switchover: the moment control shifts from velocity to pressure
- Cavity pressure curve: no overshoot; Cpk ≥ 1.33 is the production gate

ASTM D3641 §6.1.1 sets strict tolerances on injection speed, injection pressure, and metering time: **±0.1 s / ±2% / ±5%** [5].

### Packing / holding

- Hold pressure: 50–80% of injection pressure
- Hold time: gate-seal time + 1 s as a rule of thumb
- In-cavity pressure profile: no peak overshoot, Cpk 1.33 or above

ISO 294-4 specifies a five-step method for hold pressure: 20 / 40 / 60 / 80 / 100 MPa [8].

### Cooling

- Mold temperature: material-specific range (JIS K 7100 conditioning at 23 °C / 50% RH is the baseline)
- Cooling time: 5–8 s per mm of wall thickness as a starting point
- Distortion from uneven cooling: detect via anisotropy test (ISO 294-5)

### Ejection

- Ejector pin diameter: 0.6–0.8% of part outer dimension
- Ejector witness marks: SPI-SPE A-3 finish or better (ASTM D3641 §6.2.4)
- Draft angle: 1° or less (multipurpose specimen center shoulder: 2° or less)

### Cycle preparation

- Cycle time: from one gate-seal to the next
- Standards bodies do not specify this directly, but IATF 16949 (automotive QMS) requires Cpk and capability indices

## The 13-line processing report every automotive OEM asks for

Tier 1 suppliers to Toyota, Honda, and VW must submit an **IM Report (Injection Molding Report)** before mass production. The following 13 items are common across the board, and the same format applies under PPAP (Production Part Approval Process) [9].

1. Machine maker, model, max clamp tonnage
2. Shot weight (part + sprue + runner)
3. Resin maker, grade, lot number
4. Resin drying conditions (temperature, time, dew point)
5. Hopper temperature
6. Barrel zone temperatures (rear / middle / front / nozzle)
7. Melt temperature (measured)
8. Mold temperature (measured, cavity / core)
9. Injection time / hold time / cooling time / cycle time
10. Injection pressure / hold pressure (including stages)
11. Injection speed (V/P switchover position or time)
12. Cavity pressure (per sensor channel)
13. Part weight / dimensions (five representative pieces)

OEM audits check that the processing report and the live production Cpk move together, so on a real line **at least eight of these 13 items should be under SPC (statistical process control)** [10].

## Common failures and how to read the standards

### Short shots keep showing up

Start with ISO 294-1 §6.2 on cavity design. ASTM D3641 §6.2.3 gives the rule of thumb: gate diameter at least 2/3 of cavity thickness, gate land 3 mm or less [5]. To separate mold cause from material cause, the standard move is to measure flow length on a ribbed specimen (ISO 294-5 type F).

### Warpage won't go away

Anisotropy is the usual suspect. Run the ISO 294-5 plate specimen (80×120×2 mm) and measure mechanical properties in MD (machine direction) and TD (transverse direction). If the gap is over 30%, one of three factors is dominant: GF content, orientation, or residual stress. For GF-reinforced grades, measure molding shrinkage in 0.1% steps (GB/T 17037.4) [6].

### Silver streaks appeared

ASTM D3641 §6.1.1 melt-temperature control (±3 °C) — check for a deviation. Three causes cover most cases: out-of-tolerance melt, insufficient drying, or poor venting. First-pass triage: how far the actual drying condition drifted from the resin maker's recommendation (PA66: 85 °C × 4 hours, for example).

## Publishing the production spec

Before the OEM signs off on mass production, the industry norm is to publish a **property data sheet built from ISO-compliant test specimens**. The procedure:

1. Produce multipurpose specimens (type A1) per ISO 3167 (ISO 294-1)
2. Condition at 23 °C / 50% RH for 88 hours (JIS K 7100)
3. Run five tests: ASTM D638 (tensile), D790 (flexural), D256 (Izod impact), D648 (HDT), D955 (molding shrinkage)
4. Evaluate SPC across five batches × five specimens; confirm Cpk 1.33 or above
5. Submit to the OEM as PPAP level 3

With this data on hand, when Cpk drifts during production, you can quickly triangulate against the resin maker's published values [11].

## Summary

- Injection molding breaks down into six stages: plastication, injection, holding, cooling, ejection, cycle prep
- The four international standards (ISO 294, ASTM D3641, JIS, GB/T 17037) are largely aligned — ASTM D3641 ≈ ISO 294-1 through -3 plus a conditioning standard
- Automotive OEM audits require a 13-line processing report; SPC must be maintained on it during production
- When something goes wrong, cite the relevant standard clause for the cause tree, and lock the fix in with PPAP data

The quality gap lives in the standards: know them or don't. On every new mold start at our Dongguan plant, the in-house rule is to have ISO 294-1 and ASTM D3641 open in PDF before any process window is set.

## References

1. ISO 294-1:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 1: General principles, and moulding of multipurpose and bar test specimens*, ISO
2. ISO 3167:2014, *Plastics — Preparation and use of multipurpose test specimens*, ISO
3. ISO 294-2:2018, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 2: Small tensile bars*, ISO
4. ISO 294-5:2017, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 5: Preparation of standard specimens for investigating anisotropy*, ISO
5. ASTM D3641-15, *Standard Practice for Injection Molding Test Specimens of Thermoplastic Molding and Extrusion Materials*, ASTM International
6. GB/T 17037.1-2019, *Plastics — Preparation of injection-moulded test specimens of thermoplastic materials — Part 1: General principles*, Standardization Administration of China
7. ISO 1043-1:2011, *Plastics — Symbols and abbreviated terms*, ISO
8. ISO 294-4:2001, *Plastics — Injection moulding of test specimens of thermoplastic materials — Part 4: Determination of moulding shrinkage*, ISO
9. IATF 16949:2016, *Quality management system requirements for automotive production and relevant service parts organisations*, IATF
10. AIAG PPAP 4th Edition (2006), *Production Part Approval Process*, Automotive Industry Action Group
11. JIS K 7100:1999, *Plastics — Standard atmospheres for conditioning and testing*, Japanese Industrial Standards Committee
12. GB/T 17037.5-2020, *Plastics — Preparation of injection-moulded test specimens of thermoplastic materials — Part 5: Preparation of standard specimens for investigating anisotropy*, Standardization Administration of China
