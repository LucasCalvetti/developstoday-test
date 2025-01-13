import { Header } from "../components/Header";
import "./globals.css";

export const metadata = {
    title: "Country Info App",
    description: "Explore countries and their information",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100 min-h-screen">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
