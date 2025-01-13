import Link from "next/link";

export function Header() {
    return (
        <header className="bg-blue-600 p-4">
            <nav className="container mx-auto">
                <Link href="/" className="text-2xl text-white font-bold">
                    Country Info App
                </Link>
            </nav>
        </header>
    );
}
