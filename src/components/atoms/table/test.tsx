import { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
} from '@mui/material';
import {
    List,
    type RowComponentProps,
} from 'react-window';
import "./Table.css"
import { Dropdown } from '../dropdown';

export interface Column {
    field: string;
    headerName: string;
    width?: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    [key: string]: any;
}

const DEFAULT_COLUMNS: Column[] = [
    { field: 'id', headerName: 'ID', width: '10%' },
    { field: 'name', headerName: 'Name', width: '30%' },
    { field: 'email', headerName: 'Email', width: '40%' },
    { field: 'role', headerName: 'Role', width: '20%' },
];

const DEFAULT_USERS: User[] = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    role: index % 2 === 0 ? 'Developer' : 'Designer',
}));

const sampleOptions = ({ index, style, data, columns }: RowComponentProps<CustomRowProps>) => {
    const item = data[index];    
    {columns.map((col) => (
        <Checkbox {...item[col.field]} />)
    )}
}

const ROW_HEIGHT = 53;
const TABLE_HEIGHT = 400;

type CustomRowProps = {
    data: Record<string, any>[];
    columns: Column[];
};

const Row = ({ index, style, data, columns }: RowComponentProps<CustomRowProps>) => {
    const item = data[index];

    return (
        <TableRow
            component="div"
            style={{
                ...style,
                display: 'flex',
                width: '100%',
            }}
        >
            {columns.map((col) => (
                <Tooltip
                    title={item[col.field]}
                    placement="top-start"
                >
                    <TableCell
                        key={col.field}
                        component="div"
                        sx={{
                            width: col.width || `${100 / columns.length}%`,
                            flexShrink: 0,
                        }}
                    >
                        {item ? item[col.field] : ''}
                    </TableCell>
                </Tooltip>
            ))}
        </TableRow>
    );
};

export interface VirtualTableProps {
    columns?: Column[];
    data?: Record<string, any>[];
}

export default function VirtualTable({
    columns = DEFAULT_COLUMNS,
    data = DEFAULT_USERS,
}: VirtualTableProps) {
    const [isFullWidth, setIsFullWidth] = useState<boolean>(true);

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    width: isFullWidth ? '100%' : '60%',
                    display: 'flex',
                    justify: 'flex-end',
                    mb: 1,
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => setIsFullWidth((prev) => !prev)}
                >
                    {isFullWidth ? 'Detach' : 'Attach'}
                </Button>
                {/* <Dropdown options={sampleOptions}></Dropdown> */}
            </Box>

            <Paper
                sx={{
                    width: isFullWidth ? '100%' : '60%',
                }}
            >
                <TableContainer>
                    <Table>
                        <TableHead className='tableHead'>
                            <TableRow
                                component="div"
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                }}
                            >
                                {columns.map((col) => (
                                    <Tooltip
                                        title={col.field}
                                        placement="left"
                                    // enterDelay={50}
                                    >
                                        <TableCell
                                            key={col.field}
                                            component="div"
                                            sx={{
                                                width: col.width || `${100 / columns.length}%`,
                                                flexShrink: 0,

                                            }}
                                        >
                                            {col.headerName}
                                        </TableCell>
                                    </Tooltip>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody component="div">
                            <List
                                rowComponent={Row}
                                rowCount={data.length}
                                rowHeight={ROW_HEIGHT}
                                rowProps={{ data, columns }}
                                style={{
                                    height: TABLE_HEIGHT,
                                    width: '100%',
                                }}
                            />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export { VirtualTable as ReusableVirtualTable };