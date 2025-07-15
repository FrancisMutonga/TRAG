"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerLinkClick = () => {
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 200);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full flex text-gold py-4 px-8 bg-blue-700 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.4)] "
      style={{ fontFamily: "SegoeUI" }}
    >
      <div className="container mx-auto flex ml-8 justify-between items-center ">
        <div className="flex items-center space-x-4 -ml-2">
          <Link href="/admin/login">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            TopRide Academy
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 mx-auto">
          <li>
            <Link
              href="/"
              className="text-lg font-semi text-link hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-semi text-link hover:text-gray-300"
            >
              About
            </Link>
          </li>
        
          <li>
            <Link
              href="/contact"
              className="text-lg font-semi text-link hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Transparent Login Button */}
        <Link
          href="/login"
          className="hidden md:block text-gray-300  border border-stone-200 border-xl px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-500 hover:text-white transition"
        >
          Portal
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl ml-4"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full bg-blue-800 z-40 flex flex-col items-start p-6 space-y-4 shadow-lg w-1/3 transition-transform transform">
          <button
            onClick={handleDrawerLinkClick}
            className="self-end text-lg font-medium text-dark hover:text-blue-900 mb-4"
          >
            ✖
          </button>

          <Link
            href="/"
            onClick={handleDrawerLinkClick}
            className="text-lg font-medium text-white hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleDrawerLinkClick}
            className="text-lg font-medium text-white hover:text-gray-300"
          >
            About
          </Link>
         

          <Link
            href="/contact"
            onClick={handleDrawerLinkClick}
            className="text-lg  text-white font-medium hover:text-gray-300"
          >
            Contact
          </Link>

          {/* Transparent Login Button for Mobile */}
          <Link
            href="/login"
            className="text-gray-300 border border-gray-200 px-2 py-2 rounded-lg text-lg font-bold  hover:bg-gray-500 hover:text-white transition mt-4 w-full text-center"
            onClick={handleDrawerLinkClick}
          >
            Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
