import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActivePage = (pathname: string) => {
        return router.pathname === pathname;
    };

    const navLinks = [
        { href: '/', label: 'Welcome' },
        { href: '/home', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/posts', label: 'Posts' },
    ];

    return (
        <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-sm">ALX</span>
                            </div>
                            <div className="hidden sm:block">
                <span className="font-bold text-xl text-gray-900">
                  Project 0x02
                </span>
                                <div className="text-xs text-gray-500">Next.js Learning</div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    isActivePage(link.href)
                                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle navigation"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg
                                className={`h-6 w-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? 'max-h-64 opacity-100 pb-4'
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActivePage(link.href)
                                        ? 'bg-blue-100 text-blue-700 shadow-sm border-l-4 border-blue-500'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;