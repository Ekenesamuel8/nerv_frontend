"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../public/avatar/profile.jpg";
import ConnectModal from "./ConnectModal";
import Link from "next/dist/client/link";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-transparent z-50">
      <div className="flex justify-between items-center gap-8">
        <h1 className="text-2xl font-bold text-white">NERV</h1>

        <ul className="flex gap-8 text-gray-300 text-sm font-medium px-4">
          <li className="hover:text-indigo-500 cursor-pointer px-2">Home</li>
          <Link href="/discovery">
            <li className="hover:text-indigo-500 cursor-pointer px-2">Game</li>
          </Link>
          <li className="hover:text-indigo-500 cursor-pointer px-2">Developers</li>
          <li className="hover:text-indigo-500 cursor-pointer px-2">Live</li>
          <li className="hover:text-indigo-500 cursor-pointer px-2">Explore</li>
          <li className="hover:text-indigo-500 cursor-pointer px-2">Leaderboard</li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-2 top-2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Look Up a Game"
            className="bg-gray-800 text-white text-sm rounded-md pl-8 pr-3 py-2 outline-none"
          />
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="hover:bg-gray-200 text-sm"
        >
          Connect Wallet
        </Button>
        {/* Modal Component */}
        <ConnectModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <Link
            href="#"
            type="button"
            className="hover:text-gray-600 rounded-full bg-white space-x-4"
          >
            <Image
              src={ProfileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full bg-white p-1"
            />
          </Link>
      </div>
    </nav>
  );
}
