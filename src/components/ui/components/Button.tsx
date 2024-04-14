import React from 'react'

import Color from '@/components/ui/Color';

type ButtonProps = {
    label: string;
    color?: Color;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = (
    {
        label,
        color = Color.PRIMARY,
        onClick,
        className,
        disabled = false,
        outline = false
    }) => {
        const classes = `btn btn-${outline ? `outline-` : ``}${color} ${disabled ? 'disabled' : ''} ${className}`;
        return (
            <button
                className={classes}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        )
}

export default Button;