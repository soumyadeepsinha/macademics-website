'use client';
import ThemeToggler from "@/components/Theme/ThemeToggler";
import { useEffect, useState } from 'react';
// importing components
import Logo from '@/components/Logo';
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const navpath = usePathname();

  useEffect(() => {
    // adding event
    const scrollYposition = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    // remove added event
    return () => window.addEventListener('scroll', scrollYposition)
  });

  return (
    <header
      className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'}
      sticky top-0 z-30 transition-all
      ${navpath === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="w-[90%] container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Navbar for desktop */}
            <Navbar
              containerStyles='hidden xl:flex items-center gap-x-8'
              linkStyles='relative hover:text-primary transition-all duration-700'
              underlineStyles='absolute left-0 top-full mt-[2px] h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className="xl:hidden">
              {/* Navbar for mobile */}
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header