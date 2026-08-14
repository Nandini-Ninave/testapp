import { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    type SelectChangeEvent,
} from '@mui/material';
import {
    List,
    type RowComponentProps,
} from 'react-window';
import "./Table.css"
import { type Theme, useTheme } from '@mui/material/styles';

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

const ROW_HEIGHT = 53;
const TABLE_HEIGHT = 400;

type CustomRowProps = {
    data: Record<string, any>[];
    filteredcol: Column[];
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    slotProps: {
        paper: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    },
};

function getStyles(name: string, FieldName: string[], theme: Theme) {
    return {
        fontWeight: FieldName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export interface VirtualTableProps {
    columns?: Column[];
    data?: Record<string, any>[];
}

export default function VirtualTable({
    columns = DEFAULT_COLUMNS,
    data = DEFAULT_USERS,
}: VirtualTableProps) {
    const [isFullWidth, setIsFullWidth] = useState<boolean>(true);
    const theme = useTheme();
    const [FieldName, setFieldName] = useState<string[]>([]);
    const filteredcol = columns.filter((col) => FieldName.includes(col.field));
    // const ref = useRef(null);
    // const [isOverflown, setIsOverflown] = useState(false)
    // useEffect(() => {
    //   const element = ref.current!;
    //   setIsOverflown(element.scrollWidth > element.clientWidth);
    // }, []);
    const handleChange = (event: SelectChangeEvent<typeof FieldName>) => {
        const {
            target: { value },
        } = event;
        setFieldName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const Row = ({ index, style, data, filteredcol }: RowComponentProps<CustomRowProps>) => {
        const item = data[index];

        return (
            <TableRow
                component="div"
                style={{
                    ...style,
                    display: 'flex',
                    width: isFullWidth ? '100%' : '80%',
                }}
            >
                {
                    filteredcol.map((col: any) => (
                        
                        <Tooltip
                            title={item[col.field]}
                            placement="top-start"
                            arrow
                            
                        >
                            <TableCell
                                key={col.field}
                                component="div"
                                sx={{
                                    flexShrink: 0,
                                    width: col.width || `${100 / filteredcol.length}%`,
                                }}
                            >
                                {item ? item[col.field] : ''}
                            </TableCell>
                        </Tooltip>
                    ))
                }
            </TableRow>
        );
    };

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
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">Fields</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={FieldName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={() => 'Selected fields'}
                            MenuProps={MenuProps}
                        >
                            {columns.map((col) => (
                                <MenuItem key={col.field} value={col.field} style={getStyles(col.field, FieldName, theme)}>
                                    <Checkbox checked={FieldName.includes(col.field)} />
                                    <ListItemText primary={col.headerName} />
                                </MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                </div>
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
                                    width: isFullWidth ? '100%' : '80%',
                                }}
                            >
                                {
                                filteredcol.map((col) => (
                                    // <Tooltip
                                    //     title={col.field}
                                    //     placement="top-start"
                                    //     arrow
                                    // >
                                        <TableCell
                                            key={col.field}
                                            component="div"
                                            sx={{
                                                width: col.width || `${100 / FieldName.length}%`,
                                                flexShrink: 0,

                                            }}
                                        >
                                            {col.field}
                                        </TableCell>
                                    // </Tooltip>
                                ))}
                                
                            </TableRow>
                        </TableHead>

                        <TableBody component="div">
                            <List
                                rowComponent={Row}
                                rowCount={data.length}
                                rowHeight={ROW_HEIGHT}
                                rowProps={{ data, filteredcol }}
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