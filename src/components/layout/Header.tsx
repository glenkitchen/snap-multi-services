"use client";

import { useState } from "react";
import Link from "next/link";
import { QuoteButton } from "@/components/ui/WhatsAppButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SMS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Snap-Multi-Services
              </h1>
              <p className="text-sm text-gray-600">The Company You Can Trust</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#equipment"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Equipment
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right text-sm">
              <p className="text-gray-600">Paul van Rooyen: 084 323 4595</p>
              <p className="text-gray-600">Jason van Rooyen: 082 839 6910</p>
            </div>
            <QuoteButton 
              service="General Services"
              size="md"
              className="px-6 py-2"
            />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-gray-600 transition-all ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-600 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-600 transition-all ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#equipment"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Equipment
              </a>
              <Link
                href="/products"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Products
              </Link>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t text-sm">
              <p className="text-gray-600">Paul van Rooyen: 084 323 4595</p>
              <p className="text-gray-600">Jason van Rooyen: 082 839 6910</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
