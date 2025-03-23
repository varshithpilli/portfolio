'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from "@/assets/assets"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="w-full fixed top-0 px-5 py-2 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 bg-white/50 dark:bg-black/50 shadow-sm backdrop-blur-lg">
        <a href="#home">
          <div className='font-cg font-semibold text-4xl'>Varshith</div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden font-ct md:flex items-center gap-6 lg:gap-8 px-12 py-3 text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-6'>
          <button onClick={() => setIsDarkMode(prev => !prev)} className='cursor-pointer'>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          {/* Mobile Menu Open Button */}
          <button onClick={openMenu} className='block md:hidden ml-3 cursor-pointer'>
            <Image src={assets.menu_black} alt='' className='w-6 dark:invert' />
          </button>
        </div>
      </nav>

      {/* Dark Overlay When Menu is Open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className={`fixed top-0 bottom-0 right-0 h-screen w-64 z-50 bg-gray-100 dark:bg-[#202020] shadow-lg 
  transform transition-transform duration-500 flex flex-col gap-6 py-24 px-8 text-lg 
  ${isMenuOpen ? "translate-x-0" : "translate-x-64"}`}
      >
        {/* Close Button */}
        <button onClick={closeMenu} className="absolute top-6 right-6 cursor-pointer">
          <Image src={assets.close_black} alt="" className="w-6 dark:invert" />
        </button>

        {/* Mobile Menu Links */}
        <li className="font-ct cursor-pointer py-2 border-b border-gray-300 dark:border-gray-700">
          <a onClick={closeMenu} href="#home">Home</a>
        </li>
        <li className="font-ct cursor-pointer py-2 border-b border-gray-300 dark:border-gray-700">
          <a onClick={closeMenu} href="#about">About</a>
        </li>
        <li className="font-ct cursor-pointer py-2 border-b border-gray-300 dark:border-gray-700">
          <a onClick={closeMenu} href="#skills">Skills</a>
        </li>
        <li className="font-ct cursor-pointer py-2 border-b border-gray-300 dark:border-gray-700">
          <a onClick={closeMenu} href="#projects">Projects</a>
        </li>
        <li className="font-ct cursor-pointer py-2 border-b border-gray-300 dark:border-gray-700">
          <a onClick={closeMenu} href="#contact">Contact</a>
        </li>
      </ul>

    </>
  );
}

export default Navbar;
