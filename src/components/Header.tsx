'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
  const pathname = usePathname();
  // Initialize with null to ensure Home is active by default on homepage
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const initialRenderRef = useRef(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check URL hash on component mount and when pathname changes
  useEffect(() => {
    // On first render, set Home as active by default
    if (initialRenderRef.current && pathname === '/') {
      initialRenderRef.current = false;
      setActiveSection(null); // null means Home is active
    }

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    } else if (pathname === '/') {
      // If we're at the homepage with no hash, activate Home
      setActiveSection(null);
    }

    // Set up intersection observer to detect which section is in view
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Only process if we're on the homepage
      if (pathname !== '/') return;

      // Find the most visible section
      entries.forEach((entry) => {
        // Update active section only if it's more than 50% visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          // Only update if we're not at the very top of the page
          if (window.scrollY > 100) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      // This configuration is crucial for proper section detection
      rootMargin: '-50px 0px -300px 0px',
      threshold: [0.5, 0.7, 0.9],
    });

    // Observe all sections that can be scrolled to
    const sections = ['services', 'projects'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check scroll position to highlight Home when at the top
    const handleScroll = () => {
      if (pathname === '/') {
        if (window.scrollY < 100) {
          setActiveSection(null);
        } else {
          // Let the intersection observer handle section detection
          // when scrolling below the top area
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll once to set initial state based on scroll position
    handleScroll();

    return () => {
      // Clean up observer on unmount
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    // Home is active when on homepage and no section is active
    const isActive =
      href === '/'
        ? pathname === '/' && activeSection === null
        : pathname === href;

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

  const ScrollLink = ({
    sectionId,
    children,
  }: {
    sectionId: string;
    children: React.ReactNode;
  }) => {
    const isHomePage = pathname === '/';
    const href = isHomePage ? `#${sectionId}` : `/#${sectionId}`;
    const isActive = isHomePage && activeSection === sectionId;

    const handleClick = (e: React.MouseEvent) => {
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    };

    return (
      <Link
        href={href}
        onClick={handleClick}
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {' '}
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-4 xl:max-w-7xl 2xl:max-w-screen-2xl">
        {' '}
        <div className="mx-auto flex justify-between items-center">
          {' '}
          <Logo />{' '}
          <nav className="hidden md:flex space-x-4">
            {' '}
            <NavLink href="/">Home</NavLink>{' '}
            <ScrollLink sectionId="services">Services</ScrollLink>{' '}
            <ScrollLink sectionId="projects">Projects</ScrollLink>{' '}
            <NavLink href="/about">About</NavLink>{' '}
            <NavLink href="/contact">Contact</NavLink>{' '}
          </nav>{' '}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {' '}
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}{' '}
          </button>{' '}
        </div>{' '}
      </div>
      {/* Mobile menu */}{' '}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          {' '}
          <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
            {' '}
            <div className="mx-auto">
              {' '}
              <nav className="flex flex-col space-y-4 py-2">
                {' '}
                <NavLink href="/">Home</NavLink>{' '}
                <ScrollLink sectionId="services">Services</ScrollLink>{' '}
                <ScrollLink sectionId="projects">Projects</ScrollLink>{' '}
                <NavLink href="/about">About</NavLink>{' '}
                <NavLink href="/contact">Contact</NavLink>{' '}
              </nav>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      )}
    </header>
  );
};

export default Header;
