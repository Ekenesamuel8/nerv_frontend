import Navbar from "@/components/navbar";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({ subsets: ["latin"], weight: "400", variable: "--font-erica-one" });

export const metadata = {
  title: "NERV - Web3 Gaming Arena",
  description: "Play, Test, and Rule the Game in Web3 tournaments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${ericaOne.variable} font-sans`}>
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
