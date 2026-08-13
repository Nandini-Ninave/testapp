import React, { forwardRef } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    type?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            type,
            size = 'md',
            className = '',
            ...props
        },
    ) => {

        const containerClasses = [
            'input-container',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const wrapperClasses = [
            `input-field-wrapper--${size}`,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={containerClasses}>
                <input
                    type="checkbox"
                    className={wrapperClasses}
                    {...props}
                />
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
