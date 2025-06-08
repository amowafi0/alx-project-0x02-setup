import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home | ALX Project 0x02</title>
                <meta name="description" content="Home page of ALX Project 0x02" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-8">
                            Welcome to the <span className="text-green-600">Home Page</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            This is the home page of our Next.js application. Here you can explore
                            the features and capabilities of our modern web application built with
                            TypeScript and Tailwind CSS.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-green-600 text-5xl mb-4">🏠</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Home Base</h3>
                                <p className="text-gray-600">
                                    Your starting point for exploring all the features and content
                                    available in this application.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-blue-600 text-5xl mb-4">🚀</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Fast Performance</h3>
                                <p className="text-gray-600">
                                    Built with Next.js for optimal performance, featuring server-side
                                    rendering and static generation.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-purple-600 text-5xl mb-4">🎨</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Beautiful Design</h3>
                                <p className="text-gray-600">
                                    Crafted with Tailwind CSS for a modern, responsive, and
                                    aesthetically pleasing user interface.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-orange-600 text-5xl mb-4">🔧</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Developer Tools</h3>
                                <p className="text-gray-600">
                                    Enhanced with TypeScript for better development experience
                                    and code maintainability.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-red-600 text-5xl mb-4">📱</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Responsive</h3>
                                <p className="text-gray-600">
                                    Fully responsive design that works seamlessly across all
                                    devices and screen sizes.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-5xl mb-4">⚡</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Lightning Fast</h3>
                                <p className="text-gray-600">
                                    Optimized for speed with efficient routing and component
                                    architecture for the best user experience.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Ready to Get Started?
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
                                    Explore Features
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-8 rounded-lg border-2 border-green-600 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;