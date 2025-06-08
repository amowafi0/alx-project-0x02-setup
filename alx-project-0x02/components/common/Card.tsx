import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
                                       title,
                                       content,
                                       children,
                                       className = '',
                                       onClick,
                                       variant = 'default',
                                       icon,
                                   }) => {
    // Variant classes for different card styles
    const variantClasses = {
        default: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
        gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-md hover:shadow-lg',
        bordered: 'bg-white border-2 border-gray-300 hover:border-blue-400 shadow-sm hover:shadow-md',
        shadow: 'bg-white shadow-lg hover:shadow-xl border-0',
    };

    // Base classes for the card
    const baseClasses = [
        'rounded-lg',
        'p-6',
        'transition-all',
        'duration-300',
        'ease-in-out',
        'transform',
        onClick ? 'cursor-pointer hover:scale-105' : '',
        variantClasses[variant],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className={baseClasses}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {/* Icon Section */}
            {icon && (
                <div className="flex justify-center mb-4">
                    <div className="text-4xl">{icon}</div>
                </div>
            )}

            {/* Title Section */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {title}
            </h3>

            {/* Content Section */}
            <p className="text-gray-600 text-center leading-relaxed mb-4">
                {content}
            </p>

            {/* Children Section (for additional content) */}
            {children && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Card;