import express from "express";
import { fetchAvailableCountries, fetchCountryInfo } from "../controllers/country-controller.ts";

const router = express.Router();

router.get("/country/:countryCode", fetchCountryInfo);
router.get("/countries", fetchAvailableCountries);

export default router;
