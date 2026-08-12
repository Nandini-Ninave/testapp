import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

describe('Dropdown', () => {
  it('should render dropdown component with label and options', () => {
    render(<Dropdown label="Select Option" options={options} />);

    expect(screen.getByText('Select Option')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('should render placeholder option when provided', () => {
    render(<Dropdown label="Select Option" placeholder="Choose one..." options={options} />);

    const placeholderOption = screen.getByText('Choose one...');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toHaveAttribute('disabled');
  });

  it('should apply placeholder class when placeholder is selected', () => {
    render(<Dropdown label="Select Option" placeholder="Choose one..." options={options} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('dropdown-select--placeholder');
  });

  it('should call onChange when selecting an option', () => {
    const handleChange = vi.fn();
    render(<Dropdown label="Select Option" options={options} onChange={handleChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'opt2' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue('opt2');
  });

  it('should apply custom className', () => {
    const { container } = render(<Dropdown label="Test" options={options} className="custom-dropdown" />);
    expect(container.firstChild).toHaveClass('custom-dropdown');
  });

  it('should apply correct size modifier classes', () => {
    const { rerender } = render(<Dropdown label="Test" size="sm" options={options} />);
    let wrapper = screen.getByRole('combobox').parentElement;
    expect(wrapper).toHaveClass('dropdown-field-wrapper--sm');

    rerender(<Dropdown label="Test" size="md" options={options} />);
    wrapper = screen.getByRole('combobox').parentElement;
    expect(wrapper).toHaveClass('dropdown-field-wrapper--md');

    rerender(<Dropdown label="Test" size="lg" options={options} />);
    wrapper = screen.getByRole('combobox').parentElement;
    expect(wrapper).toHaveClass('dropdown-field-wrapper--lg');
  });
});
