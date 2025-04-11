// components/Navbar.tsx
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-20 py-3 border-b bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-10 ">
        <Image src="/assets/logo.png" alt="logo" width={36} height={36} />

        <ul className="flex items-center gap-8 text-sm text-gray-600">
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
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src="/assets/bell.png" alt="notification" width={32} height={32} />
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
    </nav>
  );
}
