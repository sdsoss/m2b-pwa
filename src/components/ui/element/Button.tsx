import React from 'react'

import './_buttons.scss'

type ButtonProps = {
    label: string;
    type?: string
    className?: string;
    outline?: boolean;
    rounded?: boolean;
}

const Button: React.FC<ButtonProps> = (
    {
        label,
        type = 'primary',
        className = '',
        outline = false,
        rounded = false
    }) => {

        let style = `btn btn-${type} ${className}`;
        if (outline) {
            style += ` btn-outline`;
        }
        if(rounded) {
            style += ' btn-rounded';
        }

        return (
            <button className={style}
            >
                {label}
            </button>
        )
}

export default Button;