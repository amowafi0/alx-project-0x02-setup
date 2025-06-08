import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type Post } from '../interfaces';

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch posts from JSONPlaceholder API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data: Post[] = await response.json();
                // Limit to first 12 posts for better display
                setPosts(data.slice(0, 12));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Head>
                <title>Posts | ALX Project 0x02</title>
                <meta name="description" content="Posts page of ALX Project 0x02 - Browse through our collection of posts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-gray-900 mb-8">
                                Explore <span className="text-indigo-600">Posts</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Discover a collection of engaging posts from our community.
                                Browse through various topics and find content that interests you.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center space-x-8 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-indigo-600">{posts.length}</div>
                                    <div className="text-sm text-gray-500">Posts Loaded</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-indigo-600">
                                        {new Set(posts.map(post => post.userId)).size}
                                    </div>
                                    <div className="text-sm text-gray-500">Authors</div>
                                </div>
                            </div>
                        </div>

                        {/* Loading State */}
                        {loading && (
                            <div className="flex justify-center items-center py-16">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                                <span className="ml-3 text-gray-600">Loading posts...</span>
                            </div>
                        )}

                        {/* Error State */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-red-800 font-medium">Error: {error}</p>
                                </div>
                            </div>
                        )}

                        {/* Posts Grid */}
                        {!loading && !error && posts.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {posts.map((post) => (
                                    <PostCard
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        content={post.body}
                                        userId={post.userId}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Empty State */}
                        {!loading && !error && posts.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-6xl mb-4">📝</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                                <p className="text-gray-600">There are no posts to display at the moment.</p>
                            </div>
                        )}

                        {/* Call to Action */}
                        {!loading && !error && posts.length > 0 && (
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
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default PostsPage;