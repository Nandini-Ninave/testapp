import type { Meta, StoryObj } from "@storybook/react";
import { ReusableVirtualTable } from "./Table";

const meta: Meta<typeof ReusableVirtualTable> = {
    title: 'Atoms/ReusableVirtualTable',
    component: ReusableVirtualTable,
};
export interface TableData {
    id: number;
    name: string;
    age: number;
    location: string;
}

export default meta;
type Story = StoryObj<typeof ReusableVirtualTable>;

export const Default: Story = {
    args: {
        columns: [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'age', headerName: 'Age' },
            { field: 'location', headerName: 'Location' }
        ],
        data: [{ id: 1, name: 'John Doe', age: 30, location: 'New York' }, 
            { id: 2, name: 'Jane Smith', age: 25, location: 'Los Angeles' },
            { id: 3, name: 'Mike Johnson', age: 35, location: 'Chicago' },
            { id: 4, name: 'Emily Davis', age: 28, location: 'Houston' },
            { id: 5, name: 'David Wilson', age: 32, location: 'Phoenix' },
            { id: 6, name: 'Sarah Brown', age: 27, location: 'Philadelphia' },
            { id: 7, name: 'James Taylor', age: 31, location: 'San Antonio' },
            { id: 8, name: 'Olivia Anderson', age: 29, location: 'San Diego' },
            { id: 9, name: 'William Thomas', age: 33, location: 'Dallas' },
            { id: 10, name: 'Ava Martinez', age: 26, location: 'San Jose' }
        ],
        height: 400,
        renderItem: (data:any) => (
            <>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.location}</td>
            </>
        )
    }
};          