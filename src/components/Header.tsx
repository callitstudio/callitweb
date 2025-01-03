import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-primary">
            Projects
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="/courses" className="text-gray-600 hover:text-primary">
            Courses
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
