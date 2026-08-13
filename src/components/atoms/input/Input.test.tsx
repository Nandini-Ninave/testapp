import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe(Input, () => {
    it('should render input component with label and placeholder', () => {
        render(<Input label="Email" placeholder="Enter your email..." />);
        const labelElement = screen.getByText('Email');
        expect(labelElement).toBeInTheDocument();
    })
    it('apply custom className to the input container', () => {
        render(<Input label="Email" className="custom-class" />);
        const containerElement = screen.getByText('Email').parentElement;
        expect(containerElement).toHaveClass('custom-class');
    })
    it('should apply the correct class for small size', () => {
        render(<Input label="Email" size="sm" />);
        const input = screen.getByText('Email').parentElement?.querySelector('div.input-field-wrapper');
        expect(input).toHaveClass('input-field-wrapper--sm');
        expect(input).not.toHaveClass('input-field-wrapper--md', 'input-field-wrapper--lg');
    })
    it('should apply the correct class for medium size', () => {
        render(<Input label="Email" size="md" />);
        const input = screen.getByText('Email').parentElement?.querySelector('div.input-field-wrapper');
        expect(input).toHaveClass('input-field-wrapper--md');
        expect(input).not.toHaveClass('input-field-wrapper--sm', 'input-field-wrapper--lg');
    })
    it('should apply the correct class for large size', () => {
        render(<Input label="Email" size="lg" />);
        const input = screen.getByText('Email').parentElement?.querySelector('div.input-field-wrapper');
        expect(input).toHaveClass('input-field-wrapper--lg');
        expect(input).not.toHaveClass('input-field-wrapper--sm', 'input-field-wrapper--md');
    })
    it('should render input component with value and name', () => {
        render(<Input label="Email" value="name@gmail.com" />);
        const input = screen.getByText('Email').parentElement?.querySelector('input.input-element') as HTMLInputElement;
        expect(input).toBeInTheDocument();
    })
})