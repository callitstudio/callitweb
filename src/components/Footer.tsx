'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    toast({
      title: 'Subscribed!',
      description: "You've been added to our newsletter.",
    });
    setEmail('');
  };
  return (
    <footer className="footer-container  text-white py-12 md:py-16">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <Image
              src={'/logo.png'}
              alt={'Call IT Studio Logo'}
              width={50}
              height={50}
            />
            <p className="text-sm">
              Call IT Studio is your trusted partner for innovative IT
              solutions, empowering businesses through digital transformation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm hover:text-blue-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm hover:text-blue-400"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
                required
                className="bg-white-700 text-white border-gray-600 focus:border-primary"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Call IT Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/company/call-it-studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/share/1Ap2mhJdnS/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/callitstudio?igsh=MWd6eGlvZnV0ZHZlNg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
