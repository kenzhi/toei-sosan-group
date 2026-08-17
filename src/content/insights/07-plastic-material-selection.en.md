---
title: "Plastic material selection and standards for injection molding: ABS, PC, PA66, POM, PBT, PPS in real production"
title_zh: "注塑用塑料选材与标准：ABS/PC/PA66/POM/PBT/PPS 实物对比"
title_en: "Plastic material selection and standards for injection molding: ABS, PC, PA66, POM, PBT, PPS in real production"
excerpt: "Six engineering resins that come up in every OEM conversation — compared on properties, cost, and moldability. ISO 1043, JIS, and GB nomenclature mapped to real grades, plus a selection flow that holds up on the shop floor."
excerpt_zh: "把 OEM 工厂最常问的 6 种工程塑料按物性/成本/成型性三轴对比。ISO 1043、JIS、GB 标号体系实物对照，给可直接套用的选材流程。"
excerpt_en: "Six engineering resins that come up in every OEM conversation — compared on properties, cost, and moldability. ISO 1043, JIS, and GB nomenclature mapped to real grades, plus a selection flow that holds up on the shop floor."
date: 2026-08-20
lang: en
category: "Materials & Standards"
tags: ["Injection Molding", "Material Selection", "ISO 1043", "JIS", "GB"]
draft: false
cover: "/images/site/metal.jpg"
---

## Why resin selection always sparks debate

In OEM work, one in three clients opens with "anything strong is fine" or "must hold 150 °C continuous." When it comes time to quote, the choice between ABS, PC, and PA66 matters — pick wrong and the production line ends up one batch away from a recall. I have watched it happen more than once. This post narrows the field to six resins we have run on the Dongguan floor for five years (ABS, PC, PA66, POM, PBT, PPS), laid out across three axes: **properties, cost, and moldability**.

## Properties compared across the six resins

The table below uses representative values for general-purpose grades, compiled from published data per ASTM and ISO test methods. Real grades swing 1.5–2× depending on glass fiber (GF) content and flame retardant (FR) additives.

| Resin | Density g/cm³ | Tensile strength MPa | Flexural modulus GPa | HDT (1.82 MPa) °C | Water absorption 24h % | Molding shrinkage % | Specific cost index |
|---|---|---|---|---|---|---|---|
| ABS | 1.05 | 45 | 2.3 | 95 | 0.3 | 0.4–0.7 | 1.0 |
| PC | 1.20 | 65 | 2.4 | 130 | 0.2 | 0.5–0.7 | 1.7 |
| PA66 (unfilled) | 1.14 | 80 | 2.8 | 90 | 1.3 | 1.0–2.0 | 1.6 |
| POM (copolymer) | 1.41 | 65 | 2.8 | 110 | 0.2 | 1.8–2.5 | 1.5 |
| PBT (15% GF) | 1.45 | 110 | 6.5 | 200 | 0.1 | 0.3–0.8 | 1.8 |
| PPS (40% GF) | 1.66 | 140 | 14 | 260 | 0.05 | 0.2–0.5 | 4.5 |

> HDT per ASTM D648 at 0.45 MPa or 1.82 MPa — for crystalline resins, GF reinforcement pushes HDT 1.5–2× higher. Molding shrinkage varies sharply with glass fiber content, so on the shop floor we keep GF-reinforced grades in a separate table [1].

## Application areas and pitfalls by resin

### ABS (acrylonitrile butadiene styrene)

- Typical grades: Toray "Toyolac 700," SABIC "CYCOLAC"
- Applications: Appliance housings (TV backs, AC parts), office equipment
- Pitfall: Six months outdoors halves the impact strength [2]. Skip UV protection and the housing cracks become a customer complaint.

### PC (polycarbonate)

- Typical grades: SABIC "LEXAN 1414T," Covestro "Makrolon"
- Applications: Helmets, CD substrates, automotive headlamp covers
- Pitfall: Residual stress from molding causes solvent cracking on contact with gasoline and other organics. Anneal at roughly 120 °C after molding to be safe.

### PA66 (polyamide 66, aka nylon 66)

- Typical grades: Toray "Amilan CM3004-V0," BASF "Ultramid A3EG3," DuPont "Zytel 8018"
- Applications: Automotive under-hood parts, gears, hinges
- Pitfall: Absorbs water and changes dimension. The 1.3% water absorption figure is at 23 °C water for 24 hours; at 50% RH in real use, swelling reaches 2.5%. Dry at 85 °C for 4 hours before molding [3].

### POM (polyacetal)

- Typical grades: Polyplastics "DURACON M90-44," Korea Engineering Plastics "KEPITAL TX-31"
- Applications: Fasteners, gears, ink cartridges
- Pitfall: Molding releases trace formaldehyde. With a hot runner, vent design and local exhaust are non-negotiable. Residual stress triggers crazing in chloride-rich atmospheres.

### PBT (polybutylene terephthalate)

- Typical grades: Polyplastics "DURANEX 3216" (15% GF)
- Applications: Connectors, relays, bobbins
- Pitfall: Water absorption is low, but the resin degrades above 250 °C melt temperature. GF-reinforced grades show pronounced anisotropy, so uniform wall thickness is mandatory.

### PPS (polyphenylene sulfide)

- Typical grades: Polyplastics "DURAFIDE 1140A64" (40% GF), Celanese "Fortron 1140T4"
- Applications: Under-hood high-temperature parts, fuel-system connectors
- Pitfall: Continuous use up to 240 °C is fine, but injection temperature climbs to 320 °C and mold temperature lands at 150 °C. Mold cost and machine spec need a check before committing.

## International standards for resin designation

When a client says "write it as PA66 GF30," the confusion inside the company usually comes from notation differing by country.

| Standard | Title | Example | Note |
|---|---|---|---|
| ISO 1043-1 | Plastics — Symbols and abbreviated terms | PA66-GF30 | International baseline, set in Europe [4] |
| JIS K 6899 | Plastics — Vocabulary | PA 66-GF30 | Japan, aligned with ISO [5] |
| GB/T 1844.1 | Plastics — Symbols and abbreviated terms | PA66-GF30 | China, identical to ISO 1043 [6] |
| ASTM D1600 | Plastics — Abbreviations | PA66-GF30 | United States |
| ISO 11469 | Generic identification of polymers | >PA66-GF30< | Marking on molded parts for recycling |

What "PA66," "GF30," and "FR(16)" mean:

- PA66 = Polyamide 66
- GF30 = 30 wt% glass fiber
- FR(16) = Flame-retardant grade meeting UL94 V-0 (the number is manufacturer-specific)

In other words, the resin specification should always carry the **base resin + additives + color number + certifications (UL94, FDA, RoHS, etc.)** — that is the OEM rule on the floor.

## A selection flow that starts with the application

Here is the flow I built for our Dongguan sales team — it turns a client brief into a resin in under five minutes.

1. **Service temperature**: continuous under 100 °C → ABS / PC / POM; 100–150 °C → PA66 / PBT; 200 °C and above → PPS / PEI
2. **Outdoor exposure**: yes → ASA / PA66 + UV stabilizer; no → any of the above
3. **Sliding part**: yes → POM / PA66 (reinforced grade) + oil-filled; no → structural: ABS / PC / PBT
4. **Flame retardance**: UL94 V-0 required → FR-ABS / FR-PC / FR-PA66 (GF-reinforced by default); not required → general-purpose grade
5. **Cost ceiling**: cost index 1.0 baseline → ABS; up to 1.5–2.0 acceptable → PC, PA66, POM, PBT; 3.0 and above acceptable → PPS

These five steps settle 80% of cases. The remaining 20% is decided at prototype, and at that point four tests are mandatory: ASTM D638 (tensile), D790 (flexural), D648 (HDT), D955 (molding shrinkage) [7].

## Summary

- Resin selection is a three-axis problem: properties × cost × moldability
- Use ISO 1043 as the baseline and keep a one-page mapping of JIS / GB differences
- Always run ASTM D638 / D790 / D648 / D955 at prototype stage
- The moment flame retardance, outdoor exposure, or sliding is in the spec, the candidate list collapses fast

Eighty percent of OEM jobs are covered by standard resins. The remaining 20% — high-performance jobs — tend to land on PPS, PEI, and other engineering plastics, but even then a one-page mapping of the four systems (ISO / ASTM / JIS / GB) cuts the back-and-forth between quote and mass production in half.

## References

1. ISO 1043-1:2011, *Plastics — Symbols and abbreviated terms — Part 1: Basic polymers and their special characteristics*, International Organization for Standardization, https://www.iso.org/standard/54062.html
2. Japan Plastics Industry Federation, *Characteristics and Selection Guide for Plastic Materials*, 2024 revised edition
3. ASTM D3641-15, *Standard Practice for Injection Molding Test Specimens of Thermoplastic Molding and Extrusion Materials*, ASTM International
4. ISO 1043-1:2011, op. cit.
5. JIS K 6899-1:2015, *Plastics — Vocabulary — Part 1: Polymers and their special characteristics*, Japanese Industrial Standards Committee
6. GB/T 1844.1-2008, *Plastics — Symbols and abbreviated terms — Part 1: Basic polymers and their special characteristics*, Standardization Administration of China
7. ASTM D638 / D790 / D648 / D955, ASTM International, 2014–2022 revisions
8. JIS K 7100:1999, *Plastics — Standard atmospheres for conditioning and testing*, Japanese Industrial Standards Committee
9. Japan Plastics Industry Federation, *Molding Processability Data for Injection Molding Resins*, 2023
10. SABIC LEXAN 1414T Product Data Sheet, SABIC, 2024
11. Polyplastics DURACON M90-44 Technical Documentation, Polyplastics Technical Center, 2023
12. China Plastics Processing Industry Association, *Engineering Plastics Application Handbook*, 2023 revised edition
