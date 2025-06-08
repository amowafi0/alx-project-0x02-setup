import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
                                           name,
                                           email,
                                           address,
                                           phone,
                                           website,
                                           company,
                                           id,
                                           username
                                       }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
            {/* Header with Avatar */}
            <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-xl">
            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {name}
                    </h3>
                    {username && (
                        <p className="text-sm text-gray-500">@{username}</p>
                    )}
                    {id && (
                        <p className="text-xs text-gray-400">ID: {id}</p>
                    )}
                </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.045a3 3 0 001.73 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{email}</span>
                </div>

                {phone && (
                    <div className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">{phone}</span>
                    </div>
                )}

                {website && (
                    <div className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a
                            href={`http://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            {website}
                        </a>
                    </div>
                )}
            </div>

            {/* Address Information */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                </h4>
                <div className="text-sm text-gray-600 leading-relaxed">
                    <p>{address.street} {address.suite}</p>
                    <p>{address.city}, {address.zipcode}</p>
                </div>
            </div>

            {/* Company Information */}
            {company && (
                <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Company
                    </h4>
                    <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-800">{company.name}</p>
                        <p className="italic text-gray-500">"{company.catchPhrase}"</p>
                        <p className="text-xs text-gray-400 mt-1">{company.bs}</p>
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.045a3 3 0 001.73 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Contact</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Profile</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm">Connect</span>
                </button>
            </div>
        </div>
    );
};

export default UserCard;