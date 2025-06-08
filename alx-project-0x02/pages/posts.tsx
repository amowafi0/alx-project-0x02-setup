import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Posts | ALX Project 0x02</title>
                <meta name="description" content="Posts page of ALX Project 0x02" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-gray-900 mb-8">
                                Explore <span className="text-indigo-600">Posts</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Welcome to the posts section of our Next.js application.
                                Here you can browse and explore various posts and content.
                            </p>
                        </div>

                        {/* Sample Posts Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">📝</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Getting Started</h3>
                                <p className="text-gray-600 mb-4">
                                    Learn the basics of our Next.js application and how to navigate
                                    through different features and components.
                                </p>
                                <span className="text-sm text-gray-500">Published: Today</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">⚡</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Performance Tips</h3>
                                <p className="text-gray-600 mb-4">
                                    Discover best practices for optimizing your Next.js applications
                                    and improving overall performance.
                                </p>
                                <span className="text-sm text-gray-500">Published: Yesterday</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">🎨</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Design Patterns</h3>
                                <p className="text-gray-600 mb-4">
                                    Explore modern design patterns and component architecture
                                    used in React and Next.js applications.
                                </p>
                                <span className="text-sm text-gray-500">Published: 2 days ago</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">🔧</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Development Tools</h3>
                                <p className="text-gray-600 mb-4">
                                    A comprehensive guide to the development tools and utilities
                                    that enhance your coding experience.
                                </p>
                                <span className="text-sm text-gray-500">Published: 3 days ago</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">📱</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Responsive Design</h3>
                                <p className="text-gray-600 mb-4">
                                    Learn how to create beautiful, responsive designs that work
                                    seamlessly across all devices and screen sizes.
                                </p>
                                <span className="text-sm text-gray-500">Published: 1 week ago</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-3xl mb-4">🚀</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Deployment Guide</h3>
                                <p className="text-gray-600 mb-4">
                                    Step-by-step instructions for deploying your Next.js applications
                                    to various hosting platforms.
                                </p>
                                <span className="text-sm text-gray-500">Published: 1 week ago</span>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Want to Create Your Own Posts?
                            </h2>
                            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                                Join our community and start sharing your knowledge with other developers.
                                Create engaging content and help others learn.
                            </p>
                            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Start Writing
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PostsPage;