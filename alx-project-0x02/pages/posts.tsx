import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type Post } from '../interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
    posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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
                    {/* Posts Grid */}
                    {posts.length > 0 && (
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
                    {posts.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 text-6xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                            <p className="text-gray-600">There are no posts to display at the moment.</p>
                        </div>
                    )}

                    {/* Call to Action */}
                    {posts.length > 0 && (
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

// getStaticProps function to fetch data at build time
export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data: Post[] = await response.json();
        // Limit to first 12 posts for better display
        const posts = data.slice(0, 12);

        return {
            props: {
                posts,
            },
            // Revalidate every 60 seconds (ISR - Incremental Static Regeneration)
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error fetching posts:', error);

        // Return empty posts array if fetch fails
        return {
            props: {
                posts: [],
            },
            revalidate: 60,
        };
    }
};

export default PostsPage;