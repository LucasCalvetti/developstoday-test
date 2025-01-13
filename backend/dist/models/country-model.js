var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL_NAGER = process.env.NAGER_API_URL;
const BASE_URL_COUNTRIES_NOW = process.env.COUNTRIES_NOW_API_URL;
export class Country {
    constructor(countryCode) {
        this.countryCode = countryCode;
    }
    getCountryInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${BASE_URL_NAGER}/CountryInfo/${this.countryCode}`);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error("Error fetching country info:", error);
                throw new Error("Error fetching country info");
            }
        });
    }
    getPopulationData(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${BASE_URL_COUNTRIES_NOW}/population`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ country: countryName }),
                });
                const data = yield response.json();
                return data.data;
            }
            catch (error) {
                console.error("Error fetching population data:", error);
                throw new Error("Error fetching population data");
            }
        });
    }
    getFlagUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield fetch(`${BASE_URL_COUNTRIES_NOW}/flag/images`);
                const data = yield response.json();
                const flagUrl = ((_a = data.data.find(country => country.iso2 === this.countryCode)) === null || _a === void 0 ? void 0 : _a.flag) || "";
                return flagUrl;
            }
            catch (error) {
                console.error("Error fetching flag URL:", error);
                throw new Error("Error fetching flag URL");
            }
        });
    }
}
export class Countries {
    static getAvailableCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${BASE_URL_NAGER}/AvailableCountries`);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error("Error fetching available countries:", error);
                throw new Error("Error fetching available countries");
            }
        });
    }
}
