import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import VirtualTable from './Table';

describe('VirtualTable Component', () => {
    it('should render table headers correctly', () => {
        render(<VirtualTable />);
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Role')).toBeInTheDocument();
    });

    it('should render virtualized row data', () => {
        render(<VirtualTable />);
        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.getByText('user1@example.com')).toBeInTheDocument();
        expect(screen.getAllByText('Developer').length).toBeGreaterThan(0);
    });

    it('should render custom dynamic columns and data when provided', () => {
        const customColumns = [
            { field: 'id', headerName: 'Custom ID', width: '20%' },
            { field: 'username', headerName: 'User Name', width: '80%' },
        ];
        const customData = [
            { id: 101, username: 'Alice' },
            { id: 102, username: 'Bob' },
        ];

        render(<VirtualTable columns={customColumns} data={customData} />);

        expect(screen.getByText('Custom ID')).toBeInTheDocument();
        expect(screen.getByText('User Name')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    it('should toggle table width mode when width button is clicked', () => {
        render(<VirtualTable />);
        const button = screen.getByRole('button', { name: /Reduce Width/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByRole('button', { name: /Expand Full Width/i })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: /Expand Full Width/i }));
        expect(screen.getByRole('button', { name: /Reduce Width/i })).toBeInTheDocument();
    });
});