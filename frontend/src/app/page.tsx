import { CountryList } from "../components/CountryList";

async function getCountries() {
    const res = await fetch(process.env.API_URL + "/countries");
    if (!res.ok) {
        throw new Error("Failed to fetch countries");
    }
    return res.json();
}

export default async function CountryListPage() {
    const countries = await getCountries();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Countries</h1>
            <CountryList countries={countries} />
        </div>
    );
}
