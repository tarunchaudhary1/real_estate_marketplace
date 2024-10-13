import Image from "next/image";
import Link from "next/link";
import SearchButton from "./searchButton";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import NotificationButton from "./notification";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-4 w-full bg-gray-800">
      {/* Logo and Brand */}
      <div className="flex items-center gap-4">
        <Image
          src="/BlockX_Logo.svg" // Ensure the path starts with '/'
          height={40}
          width={40}
          alt="BlockX Logo"
        />
        <p className="text-white font-bold text-2xl">BlockX</p>
      </div>

      {/* Links for Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/" className="text-white font-light hover:text-gray-400">
          Home
        </Link>
        <Link
          href="/about"
          className="text-white font-light hover:text-gray-400"
        >
          About
        </Link>
        <Link
          href="/explore"
          className="text-white font-light hover:text-gray-400"
        >
          Explore
        </Link>
        <Link
          href="/contract"
          className="text-white font-light hover:text-gray-400"
        >
          Contract
        </Link>
      </div>

      {/* Buttons (Search, Connect, Notifications) */}
      <div className="hidden lg:flex items-center gap-2">
        <SearchButton />
        <ConnectButton client={client} />
        <NotificationButton />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 left-0 bg-gray-800 z-50 p-6">
          <Link
            href="/"
            className="block py-2 text-white font-light hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-white font-light hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/explore"
            className="block py-2 text-white font-light hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore
          </Link>
          <Link
            href="/contract"
            className="block py-2 text-white font-light hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contract
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            <SearchButton />
            <ConnectButton client={client} />
            <NotificationButton />
          </div>
        </div>
      )}
    </div>
  );
}
