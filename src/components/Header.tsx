"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    
    return (
      <Link 
        href={href} 
        className={`relative transition-colors duration-300 ${
          isActive 
            ? 'text-primary font-medium' 
            : 'text-gray-600 hover:text-primary'
        }`}
      >
        {children}
        {isActive && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-fadeIn"></span>
        )}
      </Link>
    );
  };

  const ScrollLink = ({ sectionId, children }: { sectionId: string, children: React.ReactNode }) => {
    const isHomePage = pathname === '/';
    const href = isHomePage ? `#${sectionId}` : `/#${sectionId}`;
    
    const handleClick = (e: React.MouseEvent) => {
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    return (
      <Link 
        href={href} 
        onClick={handleClick}
        className="text-gray-600 hover:text-primary transition-colors duration-300"
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <ScrollLink sectionId="services">Services</ScrollLink>
          <ScrollLink sectionId="projects">Projects</ScrollLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
