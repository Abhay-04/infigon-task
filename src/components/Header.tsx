// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-white px-4 py-3 md:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 md:gap-10">
          <Image src="/assets/logo.png" alt="logo" width={36} height={36} />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">My Tests</li>
            <li className="hover:text-black cursor-pointer">My Sessions</li>
            <li className="hover:text-black cursor-pointer">Career Library</li>
            <li className="bg-gray-100 px-3 py-1 rounded text-black font-medium cursor-pointer">
              Your Report
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 cursor-pointer">
          <Image
            src="/assets/bell.png"
            alt="notification"
            width={32}
            height={32}
          />
          <div className="relative">
            <Image
              src="/assets/avatar.png"
              alt="user"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="absolute top-0 right-0 text-xs text-gray-400"></span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-3 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">My Tests</li>
            <li className="hover:text-black cursor-pointer">My Sessions</li>
            <li className="hover:text-black cursor-pointer">Career Library</li>
            <li className="bg-gray-100 px-3 py-1 rounded text-black font-medium cursor-pointer">
              Your Report
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/assets/bell.png"
              alt="notification"
              width={28}
              height={28}
            />
            <Image
              src="/assets/avatar.png"
              alt="user"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
