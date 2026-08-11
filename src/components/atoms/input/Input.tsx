import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {

    const containerClasses = [
      'input-container',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = [
      'input-field-wrapper',
      `input-field-wrapper--${size}`,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        <label>
          {label}
        </label>
        <div className={wrapperClasses}>
          <input
            ref={ref}
            className="input-element"
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
