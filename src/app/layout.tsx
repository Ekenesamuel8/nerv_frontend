import Navbar from "@/components/navbar";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata = {
  title: "NERV - Web3 Gaming Arena",
  description: "Play, Test, and Rule the Game in Web3 tournaments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
