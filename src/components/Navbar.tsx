"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/logo.jpeg"
            alt="Orphanage Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-green-700">JCRFCF</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-green-700 font-semibold"
                    : "hover:text-blue-600 transition"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/donate"
              className={`px-4 py-2 rounded-lg transition ${
                pathname === "/donate"
                  ? "bg-green-700 text-white font-semibold"
                  : "bg-green-700 text-white hover:bg-blue-700"
              }`}
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100">
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === link.path
                      ? "text-green-700 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className={`block text-center px-4 py-2 rounded-lg ${
                  pathname === "/donate"
                    ? "bg-green-700 text-white font-semibold"
                    : "bg-green-700 text-white hover:bg-blue-700"
                }`}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
