import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type User } from '../interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
    users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <>
            <Head>
                <title>Users | ALX Project 0x02</title>
                <meta name="description" content="Users page of ALX Project 0x02 - Browse through our community members" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-gray-900 mb-8">
                                Meet Our <span className="text-emerald-600">Community</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Connect with talented developers, designers, and creators from around the world.
                                Discover their skills, projects, and expertise.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center space-x-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600">{users.length}</div>
                                    <div className="text-sm text-gray-500">Community Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600">
                                        {new Set(users.map(user => user.address.city)).size}
                                    </div>
                                    <div className="text-sm text-gray-500">Cities</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600">
                                        {new Set(users.map(user => user.company?.name).filter(Boolean)).size}
                                    </div>
                                    <div className="text-sm text-gray-500">Companies</div>
                                </div>
                            </div>
                        </div>

                        {/* Search and Filter Section */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="flex-1 max-w-md">
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search users by name, email, or company..."
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                                        <option>All Cities</option>
                                        {Array.from(new Set(users.map(user => user.address.city))).map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Users Grid */}
                        {users.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                                {users.map((user) => (
                                    <UserCard
                                        key={user.id}
                                        id={user.id}
                                        name={user.name}
                                        username={user.username}
                                        email={user.email}
                                        address={user.address}
                                        phone={user.phone}
                                        website={user.website}
                                        company={user.company}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Empty State */}
                        {users.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-6xl mb-4">👥</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No users found</h3>
                                <p className="text-gray-600">There are no community members to display at the moment.</p>
                            </div>
                        )}

                        {/* Community Features */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
                                <p className="text-gray-600">Build meaningful connections with developers worldwide</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate</h3>
                                <p className="text-gray-600">Work together on exciting projects and share knowledge</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovate</h3>
                                <p className="text-gray-600">Create innovative solutions and push technology forward</p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Join Our Growing Community
                            </h2>
                            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                                Connect with like-minded developers, share your expertise, and be part of
                                an innovative community that's shaping the future of technology.
                            </p>
                            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Join Community
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

// getStaticProps function to fetch user data at build time
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const users: User[] = await response.json();

        return {
            props: {
                users,
            },
            // Revalidate every 300 seconds (5 minutes) for ISR
            revalidate: 300,
        };
    } catch (error) {
        console.error('Error fetching users:', error);

        // Return empty users array if fetch fails
        return {
            props: {
                users: [],
            },
            revalidate: 300,
        };
    }
};

export default UsersPage;