import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "NERV - Web3 Gaming Arena",
  description: "Play, Test, and Rule the Game in Web3 tournaments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
