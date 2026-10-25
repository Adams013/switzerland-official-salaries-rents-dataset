"use strict";

const wages = require("./swiss-wages-lse-2024.json");
const rents = require("./swiss-rents-2026.json");
const costOfLiving = require("./swiss-cost-of-living-2026.json");
const healthPremiums = require("./swiss-health-premiums-2027.json");

/**
 * Find official BFS LSE 2024 wage percentiles by 2-digit ISCO-08 occupation code (e.g. "25" for IT professionals).
 * Source: https://livingease.ch/blog/salary-switzerland-by-role-2026
 */
function getOccupationWages(iscoCode) {
  return wages.occupations.find((o) => o.isco_code === String(iscoCode));
}

/**
 * Find advertised and BFS existing lease rent benchmarks for a Swiss city (e.g. "Zürich", "Geneva", "Basel").
 * Source: https://livingease.ch/rent-calculator
 */
function getCityRent(cityName) {
  const q = String(cityName).toLowerCase();
  return rents.cities.find(
    (c) => c.city_en.toLowerCase() === q || c.city_de.toLowerCase() === q
  );
}

/**
 * Find single-person monthly budget & net pay share for a Swiss city.
 * Source: https://livingease.ch/blog/cost-of-living-switzerland-expat
 */
function getCityCostOfLiving(cityName) {
  const q = String(cityName).toLowerCase();
  return costOfLiving.cities.find(
    (c) => c.city_en.toLowerCase() === q || c.city_de.toLowerCase() === q || c.canton.toLowerCase() === q
  );
}

/**
 * Find 2027 BAG basic health insurance (KVG) monthly adult premiums for a canton.
 * Source: https://livingease.ch/blog/swiss-health-insurance-premiums-2027-official-figures
 */
function getCantonHealthPremium2027(cantonName) {
  const q = String(cantonName).toLowerCase();
  return healthPremiums.cantons.find((c) => c.canton.toLowerCase().startsWith(q));
}

module.exports = {
  wages,
  rents,
  costOfLiving,
  healthPremiums,
  getOccupationWages,
  getCityRent,
  getCityCostOfLiving,
  getCantonHealthPremium2027,
};
