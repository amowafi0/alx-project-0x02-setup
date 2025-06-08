import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About | ALX Project 0x02</title>
                <meta name="description" content="About ALX Project 0x02 - Learn more about our Next.js application" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-gray-900 mb-8">
                                About <span className="text-purple-600">Our Project</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Learn more about ALX Project 0x02, a comprehensive Next.js application
                                showcasing modern web development practices and technologies.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    What is ALX Project 0x02?
                                </h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    ALX Project 0x02 is a hands-on learning experience designed to teach
                                    modern web development using Next.js, TypeScript, and Tailwind CSS.
                                    This project serves as a comprehensive introduction to building
                                    production-ready web applications.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Through this project, developers learn essential skills including
                                    component architecture, routing, state management, API integration,
                                    and responsive design principles.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="font-bold text-xl mb-4 text-gray-900">Key Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">Next.js 14 with TypeScript</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">Tailwind CSS for styling</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">Component-based architecture</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">Responsive design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">API integration</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-3">✓</span>
                                        <span className="text-gray-700">Modern development practices</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Button Component Demo Section */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Button Component Demo
                            </h2>

                            <p className="text-gray-600 mb-8 text-center">
                                Here are examples of our reusable Button component with different sizes and shapes:
                            </p>

                            {/* Three buttons with different sizes and shapes as required */}
                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <Button
                                    size="small"
                                    shape="rounded-sm"
                                    variant="primary"
                                    onClick={() => alert('Small button with sharp corners clicked!')}
                                >
                                    Small & Sharp
                                </Button>

                                <Button
                                    size="medium"
                                    shape="rounded-md"
                                    variant="secondary"
                                    onClick={() => alert('Medium button with rounded corners clicked!')}
                                >
                                    Medium & Rounded
                                </Button>

                                <Button
                                    size="large"
                                    shape="rounded-full"
                                    variant="outline"
                                    onClick={() => alert('Large button with full rounded corners clicked!')}
                                >
                                    Large & Pill Shape
                                </Button>
                            </div>

                            {/* Additional examples showing all combinations */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                                        All Size Variations
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button
                                            size="small"
                                            shape="rounded-md"
                                            variant="primary"
                                            onClick={() => alert('Small button clicked!')}
                                        >
                                            Small
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="primary"
                                            onClick={() => alert('Medium button clicked!')}
                                        >
                                            Medium
                                        </Button>
                                        <Button
                                            size="large"
                                            shape="rounded-md"
                                            variant="primary"
                                            onClick={() => alert('Large button clicked!')}
                                        >
                                            Large
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                                        All Shape Variations
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button
                                            size="medium"
                                            shape="rounded-sm"
                                            variant="secondary"
                                            onClick={() => alert('Sharp corners button clicked!')}
                                        >
                                            Sharp Corners
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="secondary"
                                            onClick={() => alert('Rounded corners button clicked!')}
                                        >
                                            Rounded Corners
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-full"
                                            variant="secondary"
                                            onClick={() => alert('Pill shape button clicked!')}
                                        >
                                            Pill Shape
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                                        Different Variants
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="primary"
                                            onClick={() => alert('Primary button clicked!')}
                                        >
                                            Primary
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="secondary"
                                            onClick={() => alert('Secondary button clicked!')}
                                        >
                                            Secondary
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="outline"
                                            onClick={() => alert('Outline button clicked!')}
                                        >
                                            Outline
                                        </Button>
                                        <Button
                                            size="medium"
                                            shape="rounded-md"
                                            variant="primary"
                                            disabled
                                        >
                                            Disabled
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Technologies Used
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-black text-white rounded-lg p-4 mb-3 text-2xl font-bold">
                                        Next.js
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        React framework for production applications
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-blue-600 text-white rounded-lg p-4 mb-3 text-2xl font-bold">
                                        TypeScript
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Static type checking for JavaScript
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-cyan-500 text-white rounded-lg p-4 mb-3 text-2xl font-bold">
                                        Tailwind
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Utility-first CSS framework
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-yellow-500 text-white rounded-lg p-4 mb-3 text-2xl font-bold">
                                        ESLint
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Code quality and consistency
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Project Goals
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6">
                                    <div className="text-4xl mb-4">🎓</div>
                                    <h3 className="font-bold text-lg mb-2">Learn</h3>
                                    <p className="text-blue-100">
                                        Master modern web development technologies and best practices
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl p-6">
                                    <div className="text-4xl mb-4">🚀</div>
                                    <h3 className="font-bold text-lg mb-2">Build</h3>
                                    <p className="text-green-100">
                                        Create production-ready applications with professional quality
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl p-6">
                                    <div className="text-4xl mb-4">🌟</div>
                                    <h3 className="font-bold text-lg mb-2">Excel</h3>
                                    <p className="text-orange-100">
                                        Develop skills that make you stand out as a developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutPage;