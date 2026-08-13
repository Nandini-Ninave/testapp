import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  name?: string;
  // type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      name,
      // type,
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
            // type="checkbox"
            className="input-element"
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
