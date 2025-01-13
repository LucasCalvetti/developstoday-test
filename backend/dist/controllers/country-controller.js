var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Country, Countries } from "../models/country-model.js";
export const fetchAvailableCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield Countries.getAvailableCountries();
        res.status(200).json(countries);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch available countries" });
    }
});
export const fetchCountryInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { countryCode } = req.params;
    try {
        const country = new Country(countryCode);
        const countryInfo = yield country.getCountryInfo();
        const populationData = yield country.getPopulationData(countryInfo.commonName);
        const flagUrl = yield country.getFlagUrl();
        res.status(200).json({
            borderCountries: countryInfo.borders,
            populationData,
            flagUrl,
        });
    }
    catch (error) {
        console.error("Error fetching country info:", error);
        res.status(500).json({ error: "Failed to fetch country info" });
    }
});
