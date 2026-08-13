import React, { forwardRef } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options?: (DropdownOption | string)[];
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean | string;
  helperText?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      options = [],
      placeholder,
      size = 'md',
      error,
      helperText,
      className = '',
      children,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {

    const normalizedOptions: DropdownOption[] = options.map((opt) =>
      typeof opt === 'string' ? { label: opt, value: opt } : opt
    );

    const containerClasses = [
      'dropdown-container',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = [
      'dropdown-field-wrapper',
      `dropdown-field-wrapper--${size}`,
      error ? 'dropdown-field-wrapper--error' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const isPlaceholderSelected =
      value === '' || (value === undefined && defaultValue === undefined);

    return (
      <div className={containerClasses}>
        {label && (
          <label className="dropdown-label">
            {label}
          </label>
        )}
        <div className={wrapperClasses}>
          <select
            ref={ref}
            className={`dropdown-select ${isPlaceholderSelected && placeholder ? 'dropdown-select--placeholder' : ''
              }`}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            {...props}
          >
            {placeholder && (
              <option value="">
                {placeholder}
              </option>
            )}
            {children
              ? children
              : normalizedOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
          <div className="dropdown-chevron" aria-hidden="true">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {(helperText || typeof error === 'string') && (
          <span
            className={`dropdown-helper-text ${error ? 'dropdown-helper-text--error' : ''
              }`}
          >
            {typeof error === 'string' ? error : helperText}
          </span>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
