# swiss-official-salaries-rents

Zero-dependency dataset package providing cleaned, machine-readable **Swiss official salaries by occupation (BFS LSE 2024)**, **apartment rent benchmarks by city**, **2027 cantonal basic health insurance premiums (BAG)**, and **single-person monthly cost-of-living budgets** in CHF.

Maintained by **[LivingEase.ch](https://livingease.ch)** — Swiss Relocation, Career & Official Data Tools.

---

## Install

```bash
npm install swiss-official-salaries-rents
```

---

## Quick Start (ESM & CommonJS)

```js
import {
  wages,
  rents,
  costOfLiving,
  healthPremiums,
  getOccupationWages,
  getCityRent,
  getCityCostOfLiving,
  getCantonHealthPremium2027,
} from "swiss-official-salaries-rents";

// 1. Official BFS LSE 2024 wages for IT Professionals (ISCO-08 code "25")
const itWages = getOccupationWages("25");
console.log(itWages.annual_median_chf); // 119400 (CHF gross/year)

// 2. City rent benchmarks (advertised listings vs. BFS existing leases)
const zurichRent = getCityRent("Zürich");
console.log(zurichRent.advertised_median_2_rooms_chf); // 2-room median CHF/month

// 3. Single-person monthly cost of living & net pay share
const genevaBudget = getCityCostOfLiving("Geneva");
console.log(genevaBudget.total_monthly_budget_chf, genevaBudget.budget_share_of_net_pay_pct);

// 4. Official 2027 BAG basic health insurance (KVG) adult premiums by canton
const zugHealth = getCantonHealthPremium2027("Zug");
console.log(zugHealth.median, zugHealth.cheapest, zugHealth.cheapestInsurer);
```

---

## Included Datasets & Interactive Tools

1. **Official Swiss Wages by Occupation & Region (`swiss-wages-lse-2024.json` / `.csv`)**
   - **Coverage:** 36 ISCO-08 occupation groups, 9 major groups, 7 Swiss statistical regions (*Grossregionen*), and 3 age bands (`u30`, `30to49`, `50plus`) from the Swiss Federal Statistical Office Wage Structure Survey (*BFS Lohnstrukturerhebung LSE 2024*, PxWeb table `px-x-0304010000_205`).
   - **Interactive Calculator:** [Swiss Salary Calculator (Gross-to-Net across 26 Cantons)](https://livingease.ch/salary-calculator) | [DE Lohnrechner](https://livingease.ch/de/salary-calculator) | [FR Calculateur de salaire](https://livingease.ch/fr/salary-calculator)
   - **Full Methodology & Guides:**
     - [Swiss Salary Guide 2026: Official Pay for 36 Occupations](https://livingease.ch/blog/salary-switzerland-by-role-2026)
     - [Lohn nach Beruf Schweiz 2026: amtliche Löhne für 36 Berufe](https://livingease.ch/blog/de/gehalt-schweiz-nach-beruf-2026)
     - [Salary by Canton in Switzerland: Official BFS Medians](https://livingease.ch/blog/salary-by-canton-switzerland)
     - [Lohn nach Kanton Schweiz: offizielle Medianlöhne](https://livingease.ch/blog/de/gehalt-nach-kanton-schweiz)
     - [CFO and Finance Salaries in Switzerland: Official Data](https://livingease.ch/blog/c-suite-finance-salary-switzerland)

2. **Swiss Apartment Rents by City (`swiss-rents-2026.json` / `.csv`)**
   - **Coverage:** Advertised monthly rents by room count (1 to 4+ rooms) compared against official BFS *Strukturerhebung* existing lease rents across 16 Swiss cities (Zurich, Geneva, Lausanne, Basel, Bern, Winterthur, Lucerne, St. Gallen, Lugano, Biel/Bienne, Thun, Fribourg, Schaffhausen, Neuchâtel, La Chaux-de-Fonds, Sion).
   - **Interactive Tool:** [Swiss Rent Calculator](https://livingease.ch/rent-calculator)
   - **Guides:** [Average Rent in Switzerland by City](https://livingease.ch/blog/rent-by-city-switzerland) | [Mietpreise Schweiz nach Stadt](https://livingease.ch/blog/de/mietpreise-schweiz-nach-stadt)

3. **Swiss Cost of Living & Monthly Budgets (`swiss-cost-of-living-2026.json` / `.csv`)**
   - **Coverage:** Single-person monthly budgets across 8 Swiss cities combining advertised 2-room rents, BAG 2027 cantonal health insurance medians, BFS Household Budget Survey (*HABE 2023*) everyday spending, and ESTV 2026 net take-home pay shares.
   - **Guides:** [Cost of Living in Switzerland: Monthly Budget by City](https://livingease.ch/blog/cost-of-living-switzerland-expat) | [Lebenshaltungskosten Schweiz: Monatsbudget nach Stadt](https://livingease.ch/blog/de/lebenshaltungskosten-schweiz)

4. **2027 Basic Health Insurance Premiums by Canton (`swiss-health-premiums-2027.json` / `.csv`)**
   - **Coverage:** Official 2027 mandatory basic health insurance (KVG / LAMal) adult monthly premiums across all 26 cantons from the Federal Office of Public Health (BAG / `opendata.swiss`).
   - **Guides:** [Swiss Health Insurance Premiums 2027: Official Figures](https://livingease.ch/blog/swiss-health-insurance-premiums-2027-official-figures) | [How to Cancel Health Insurance in Switzerland](https://livingease.ch/blog/cancel-health-insurance-switzerland) | [Krankenkasse kündigen Schweiz](https://livingease.ch/blog/de/krankenkasse-kuendigen)

---

## License & Attribution

Published under **CC-BY 4.0**. Free to use in research, journalism, dashboards, and applications with attribution to **[LivingEase.ch](https://livingease.ch)**.
