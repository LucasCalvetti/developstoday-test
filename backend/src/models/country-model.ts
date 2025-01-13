const BASE_URL_NAGER = process.env.NAGER_API_URL;
const BASE_URL_COUNTRIES_NOW = process.env.COUNTRIES_NOW_API_URL;

// Aviable countries
type AvailableCountriesResponse = {
    countryCode: string;
    name: string;
}[];

// Country types
type CountryInfo = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[] | null;
};

type Border = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
};

// Flag types
type FlagResponse = {
    error: boolean;
    msg: string;
    data: CountryFlag[];
};

type CountryFlag = {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
};

// Population type
type PopulationDataResponse = {
    country: string;
    code: string;
    iso3: string;
    populationCounts: { year: number; value: number }[];
};

export class Country {
    private countryCode: string;

    constructor(countryCode: string) {
        this.countryCode = countryCode;
    }

    public async getCountryInfo(): Promise<CountryInfo> {
        try {
            const response = await fetch(`${BASE_URL_NAGER}/CountryInfo/${this.countryCode}`);
            const data: CountryInfo = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching country info:", error);
            throw new Error("Error fetching country info");
        }
    }

    public async getPopulationData(countryName: string): Promise<PopulationDataResponse> {
        try {
            const response = await fetch(`${BASE_URL_COUNTRIES_NOW}/population`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ country: countryName }),
            });
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error("Error fetching population data:", error);
            throw new Error("Error fetching population data");
        }
    }

    public async getFlagUrl(): Promise<string> {
        try {
            const response = await fetch(`${BASE_URL_COUNTRIES_NOW}/flag/images`);
            const data: FlagResponse = await response.json();
            const flagUrl = data.data.find(country => country.iso2 === this.countryCode)?.flag || "";
            return flagUrl;
        } catch (error) {
            console.error("Error fetching flag URL:", error);
            throw new Error("Error fetching flag URL");
        }
    }
}

export class Countries {
    static async getAvailableCountries(): Promise<AvailableCountriesResponse> {
        try {
            const response = await fetch(`${BASE_URL_NAGER}/AvailableCountries`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching available countries:", error);
            throw new Error("Error fetching available countries");
        }
    }
}
