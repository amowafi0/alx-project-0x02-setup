// User interface for API data
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

// Post interface for API data
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Comment interface for API data
export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

// Component Props Interfaces
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export interface PostCardProps {
    post: Post;
    onClick?: (post: Post) => void;
}

export interface UserCardProps {
    user: User;
    onClick?: (user: User) => void;
}

export interface PostModalProps {
    post: Post | null;
    isOpen: boolean;
    onClose: () => void;
}

export interface HeaderProps {
    className?: string;
}

// API Response interfaces
export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

// Navigation interface
export interface NavItem {
    label: string;
    href: string;
    active?: boolean;
}