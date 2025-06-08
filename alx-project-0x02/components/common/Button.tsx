import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           size = 'medium',
                                           shape = 'rounded-md',
                                           variant = 'primary',
                                           disabled = false,
                                           className = '',
                                           type = 'button',
                                       }) => {
    // Size classes
    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    // Shape classes
    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    // Variant classes
    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent',
    };

    // Disabled classes
    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer hover:scale-105';

    // Combine all classes
    const buttonClasses = [
        'inline-flex items-center justify-center',
        'font-medium',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        'transform active:scale-95',
        sizeClasses[size],
        shapeClasses[shape],
        variantClasses[variant],
        disabledClasses,
        className,
    ].join(' ');

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;