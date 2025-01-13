"use client";

import { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import Link from "next/link";

type CountriesResponse = {
    countryCode: string;
    name: string;
}[];

export function CountryList({ countries }: { countries: CountriesResponse }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        const filtered = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredCountries(filtered);
    }, [searchTerm, countries]);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <div>
            <SearchInput placeholder="Search countries..." value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCountries.map(country => (
                    <Link key={country.countryCode} href={`/country/${country.countryCode}`} className="text-blue-600 hover:underline">
                        <li className="bg-white shadow rounded-lg p-4">{country.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
