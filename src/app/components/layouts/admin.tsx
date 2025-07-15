"use client";

import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  isOpen: boolean;
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // For mobile, use overlay
    return (
      <>
        {/* Mobile top nav */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 shadow-md px-4 py-3 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-stone-200 text-xl font-bold">TopRide Academy</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white text-xl">
            <FaBars />
          </button>
        </div>

        {isSidebarOpen && (
          <div className="fixed top-0 left-0 h-full w-40 bg-amber-500 mt-4 shadow-xl flex flex-col transition-all duration-300 z-40 rounded-r-xl overflow-hidden">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white mb-6 text-right w-full"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4">
              <SidebarItem icon={<FaHome />} label="Home" link="/admin/dashboard" isOpen />
              <SidebarItem icon={<FaUser />} label="Profile" link="/profile" isOpen />
              <SidebarItem icon={<FaCog />} label="Settings" link="/settings" isOpen />
              <SidebarItem icon={<FaSignOutAlt />} label="Logout" link="/" isOpen />
            </nav>
          </div>
        )}
      </>
    );
  }

  // For desktop: part of flex flow
  return (
    <div
      className={clsx(
        "h-screen bg-amber-500 shadow-md transition-all duration-300 overflow-hidden rounded-r-xl",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white flex items-center gap-3 mb-8 focus:outline-none"
        >
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          {isOpen && <span className="text-stone-200 text-xl font-bold">TRA Admin</span>}
        </button>

        <nav className="flex flex-col gap-6 mt-4">
          <SidebarItem icon={<FaHome />} label="Home" link="/admin/dashboard" isOpen={isOpen} />
          <SidebarItem icon={<FaUser />} label="Profile" link="/profile" isOpen={isOpen} />
          <SidebarItem icon={<FaCog />} label="Settings" link="/settings" isOpen={isOpen} />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" link="/" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, link, isOpen }) => {
  return (
    <Link
      href={link}
      className={clsx(
        "flex items-center text-stone-200 p-3 rounded-lg hover:bg-white/20 transition-all duration-200",
        isOpen ? "gap-4 justify-start" : "justify-center"
      )}
    >
      {icon}
      {isOpen && <span className="text-lg">{label}</span>}
    </Link>
  );
};

export default Sidebar;
