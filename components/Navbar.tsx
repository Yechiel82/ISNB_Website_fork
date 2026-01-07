'use client';

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/satuvisibagiindonesia-removebg.png" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {/* <Button type="button" title="Admin" icon="/user.svg" variant="btn_dark_green" /> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="inline-block cursor-pointer lg:hidden p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // Custom close icon (X)
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="relative w-6 h-6">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>
        ) : (
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-20">
          <ul className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="regular-16 text-gray-50 block py-2 transition-all hover:font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <li className="pt-2">
              <Button type="button" title="Admin" icon="/user.svg" variant="btn_dark_green" />
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
