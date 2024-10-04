import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex gap-4 p-2 bg-blue-500">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/country" className="text-black">Country List</Link>
            <Link href="/country" className="text-black">Explore Countries</Link> {/* Set to black */}
        </div>
    );
}
