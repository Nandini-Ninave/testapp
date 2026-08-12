import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      name,
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
            className="input-element"
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
