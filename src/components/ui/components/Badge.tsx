import React from "react";

type BadgeProps = {
    label: string;
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light' | 'dark';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, type = 'primary', className }) => {
    return (
        <span className={`badge bg-${type} ${className}`}>
            {label}
        </span>
    )
}

export default Badge;