import Image from "next/image";
import Link from "next/link";
import PopulationChart from "../../../components/PopulationChart";

type PopulationCount = {
    year: number;
    value: number;
};

type PopulationData = {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
};

type BorderCountry = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: string[] | null;
};

type CountryInfoResponse = {
    borderCountries: BorderCountry[];
    populationData?: PopulationData;
    flagUrl: string;
};

async function getCountryInfo(countryCode: string): Promise<CountryInfoResponse> {
    const res = await fetch(`${process.env.API_URL}/country/${countryCode}`);
    if (!res.ok) {
        throw new Error("Failed to fetch country info");
    }
    return res.json();
}

export default async function CountryInfoPage({ params }: { params: { countryCode: string } }) {
    const countryInfo = await getCountryInfo(params.countryCode);

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-6">
                <h1 className="text-3xl font-bold mr-4">{countryInfo.populationData?.country}</h1>
                <Image src={countryInfo.flagUrl} alt={`Flag of ${countryInfo.populationData?.country}`} width={60} height={40} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Border Countries</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {countryInfo.borderCountries.map((country) => (
                    <li key={country.countryCode} className="bg-white shadow rounded-lg p-4">
                        <Link href={`/country/${country.countryCode}`} className="text-blue-600 hover:underline">
                            {country.commonName}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Population Over Time</h2>
            {!countryInfo.populationData || countryInfo.populationData.populationCounts.length === 0 ? (
                <p>This country has no population data</p>
            ) : (
                <PopulationChart populationData={countryInfo.populationData.populationCounts} />
            )}
        </div>
    );
}
