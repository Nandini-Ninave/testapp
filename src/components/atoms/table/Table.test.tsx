import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import VirtualTable from './Table';
import userEvent from '@testing-library/user-event';

describe('VirtualTable Component', () => {
    it('should render table headers correctly', async () => {
        const customColumns = [
            { field: 'id', headerName: 'Custom ID', width: '20%' },
            { field: 'name', headerName: 'User Name', width: '80%' },
        ];
        // screen.
        render(<VirtualTable columns={customColumns} />);
        const id = screen.getByText('id')
        expect(id).toBeInTheDocument()
        
        // expect(screen.findByText('id')).toBeInTheDocument();
        // expect(screen.findByText('name')).toBeInTheDocument();
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
            { field: 'name', headerName: 'User Name', width: '80%' },
        ];
        const customData = [
            { id: 101, name: 'Alice' },
            { id: 102, name: 'Bob' },
        ];

        render(<VirtualTable columns={customColumns} data={customData} />);

        expect(screen.getByText('id')).toBeInTheDocument();
        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    it('should toggle table width when width button is clicked', () => {
        render(<VirtualTable />);
        const button = screen.getByRole('button', { name: /Detach/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByRole('button', { name: /Attach/i })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: /Attach/i }));
        expect(screen.getByRole('button', { name: /Detach/i })).toBeInTheDocument();
    });

    it('should render tooltip on hover', async () => {
        render(<VirtualTable />)
        const fieldName = screen.getByText('id')
        expect(fieldName).toBeInTheDocument()
        await userEvent.hover(fieldName)
        const tip = await screen.findByRole('tooltip'); 
        expect(tip).toBeInTheDocument();
    })
});