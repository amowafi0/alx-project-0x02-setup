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
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
    title: string;
    content: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'default' | 'gradient' | 'bordered' | 'shadow';
    icon?: string;
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
// ButtonProps interface
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}