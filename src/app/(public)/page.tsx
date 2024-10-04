import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="bg-gray-200 text-center p-4 hover:text-green-500">Country App </h1>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
                <div className="bg-white p-3 rounded shadow-md">
                    <Link href="/country">Explore Countries</Link>
                </div>
            </div>


        </>
    )
}