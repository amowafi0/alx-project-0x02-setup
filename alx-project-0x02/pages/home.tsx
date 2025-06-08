import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import PostModal from '@/components/common/PostModal';

interface UserPost {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<UserPost[]>([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePostSubmit = (postData: { title: string; content: string }) => {
        const newPost: UserPost = {
            id: Date.now(),
            title: postData.title,
            content: postData.content,
            createdAt: new Date().toLocaleDateString(),
        };
        setPosts([newPost, ...posts]);
    };

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
                            <Card
                                title="Home Base"
                                content="Your starting point for exploring all the features and content available in this application."
                                icon="🏠"
                                variant="default"
                                onClick={() => alert('Home Base card clicked!')}
                            />

                            <Card
                                title="Fast Performance"
                                content="Built with Next.js for optimal performance, featuring server-side rendering and static generation."
                                icon="🚀"
                                variant="gradient"
                                onClick={() => alert('Fast Performance card clicked!')}
                            />

                            <Card
                                title="Beautiful Design"
                                content="Crafted with Tailwind CSS for a modern, responsive, and aesthetically pleasing user interface."
                                icon="🎨"
                                variant="bordered"
                                onClick={() => alert('Beautiful Design card clicked!')}
                            />

                            <Card
                                title="Developer Tools"
                                content="Enhanced with TypeScript for better development experience and code maintainability."
                                icon="🔧"
                                variant="shadow"
                                onClick={() => alert('Developer Tools card clicked!')}
                            >
                                <div className="flex justify-center">
                                    <Button
                                        size="small"
                                        variant="primary"
                                        shape="rounded-md"
                                        onClick={(e) => {
                                            e?.stopPropagation?.();
                                            alert('Learn More button clicked!');
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </Card>

                            <Card
                                title="Responsive"
                                content="Fully responsive design that works seamlessly across all devices and screen sizes."
                                icon="📱"
                                variant="default"
                                onClick={() => alert('Responsive card clicked!')}
                            />

                            <Card
                                title="Lightning Fast"
                                content="Optimized for speed with efficient routing and component architecture for the best user experience."
                                icon="⚡"
                                variant="gradient"
                                onClick={() => alert('Lightning Fast card clicked!')}
                            />
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Ready to Get Started?
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="large"
                                    variant="success"
                                    shape="rounded-md"
                                    onClick={() => alert('Explore Features clicked!')}
                                >
                                    Explore Features
                                </Button>
                                <Button
                                    size="large"
                                    variant="outline"
                                    shape="rounded-md"
                                    onClick={() => alert('Learn More clicked!')}
                                >
                                    Learn More
                                </Button>
                                <Button
                                    size="large"
                                    variant="primary"
                                    shape="rounded-md"
                                    onClick={openModal}
                                >
                                    Create Post
                                </Button>
                            </div>
                        </div>

                        {/* Display User Posts */}
                        {posts.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    Your Posts
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {posts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow"
                                        >
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {post.content}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Created: {post.createdAt}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Post Modal */}
            <PostModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handlePostSubmit}
            />
        </>
    );
};

export default HomePage;