import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">ALX</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900">
                Project 0x02
              </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/posts"
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            Posts
                        </Link>
                        <Link
                            href="/users"
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            Users
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            aria-label="Toggle navigation"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;