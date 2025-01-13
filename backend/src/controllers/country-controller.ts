import { Request, Response } from "express";
import { Country, Countries } from "../models/country-model.js";

export const fetchAvailableCountries = async (req: Request, res: Response) => {
    try {
        const countries = await Countries.getAvailableCountries();
        res.status(200).json(countries);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch available countries" });
    }
};

export const fetchCountryInfo = async (req: Request, res: Response) => {
    const { countryCode } = req.params;

    try {
        const country = new Country(countryCode);

        const countryInfo = await country.getCountryInfo();
        const populationData = await country.getPopulationData(countryInfo.commonName);
        const flagUrl = await country.getFlagUrl();

        res.status(200).json({
            borderCountries: countryInfo.borders,
            populationData,
            flagUrl,
        });
    } catch (error) {
        console.error("Error fetching country info:", error);
        res.status(500).json({ error: "Failed to fetch country info" });
    }
};
