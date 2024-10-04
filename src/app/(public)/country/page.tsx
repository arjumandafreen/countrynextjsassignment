import { countries } from "@/app/data/countries";
import Link from "next/link";

const countryList = countries.slice(0, 5).map((item, i) => {
    return (
        <li key={i} className="hover:bg-slate-500 capitalize">
            {i + 1} <Link className="p-4 text-black hover:text-green-500" href={`/country/${item.name}`}>{item.name.toLocaleLowerCase()}</Link> {/* Change to black */}
        </li>
    );
});

export default function Country() {
    return (
        <>
            <h1 className="bg-gray-200 text-center p-4 text-black hover:text-green-500 mb-2">Country List</h1> {/* Change to black */}
            <ul>{countryList}</ul>
        </>
    );
}
