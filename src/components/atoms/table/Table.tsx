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
    // TableHead,
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
    maxChars?: number;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    [key: string]: any;
}

const DEFAULT_COLUMNS: Column[] = [
    { field: 'id', headerName: 'ID', width: '10%', maxChars: 4 },
    { field: 'name', headerName: 'Name', width: '30%', maxChars: 8 },
    { field: 'email', headerName: 'Email', width: '40%', maxChars: 20 },
    { field: 'role', headerName: 'Role', width: '20%', maxChars: 10 },
];

const DEFAULT_USERS: User[] = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `Userrrrrrrrrrrrrrrrrrrrrr ${index + 1}`,
    email: `user${index + 1}@example.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmjjjjjjjjjjjjjjjjjj`,
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

function TruncatedTableCell({
    value,
    width,
    maxChars,
    isHeader = false,
}: {
    value: any;
    width: string;
    maxChars?: number;
    isHeader?: boolean;
}) {
    const textRef = useRef<HTMLSpanElement>(null);
    const [open, setOpen] = useState(false);

    const textString = value !== undefined && value !== null ? String(value) : '';
    const isCharTruncated = !isHeader && maxChars !== undefined && textString.length > maxChars;
    const displayText = isCharTruncated ? `${textString.slice(0, maxChars)}...` : textString;

    const handleMouseEnter = () => {
        if (textRef.current) {
            const el = textRef.current;
            const hasDomOverflow = el.scrollWidth > el.clientWidth || (el.scrollWidth === 0 && el.clientWidth === 0);
            const hasOverflow = isCharTruncated || hasDomOverflow;
            if (hasOverflow) {
                setOpen(true);
            }
        }
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return (
        <TableCell
            component="div"
            sx={{
                flexShrink: 0,
                width,
                overflow: 'hidden',
                fontWeight: isHeader ? 'bold' : 'normal',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Tooltip
                title={textString}
                open={open}
                onClose={handleMouseLeave}
                placement="top-start"
                arrow
            >
                <Box
                    ref={textRef}
                    component="span"
                    sx={{
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '100%',
                    }}
                >
                    {displayText}
                </Box>
            </Tooltip>
        </TableCell>
    );
}

export default function VirtualTable({
    columns = DEFAULT_COLUMNS,
    data = DEFAULT_USERS,
}: VirtualTableProps) {
    const [isFullWidth, setIsFullWidth] = useState<boolean>(true);
    const theme = useTheme();
    const [FieldName, setFieldName] = useState<string[]>(() => columns.map((col) => col.field));
    useEffect(() => {
        setFieldName(columns.map((col) => col.field));
    }, [columns]);

    const filteredcol = columns.filter((col) => FieldName.includes(col.field));

    const handleChange = (event: SelectChangeEvent<string[]>) => {
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
                {filteredcol.map((col: Column) => (
                    <TruncatedTableCell
                        key={col.field}
                        value={item ? item[col.field] : ''}
                        width={col.width || `${100 / filteredcol.length}%`}
                        maxChars={col.maxChars ?? (col.field === 'email' ? 20 : undefined)}
                    />
                ))}
            </TableRow>
        );
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <DataGridPro columns={columns} rows={data}/> */}
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
                    sx={{
                        height: '50px',
                        mt: 1
                    }}
                >
                    {isFullWidth ? 'Detach' : 'Attach'}
                </Button>
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel
                            id="demo-multiple-name-label"
                            sx={{
                                mr: 1,

                            }}
                        >
                            Fields
                        </InputLabel>
                        <Select<string[]>
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={FieldName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={() => 'Selected fields'}
                            MenuProps={MenuProps}
                            sx={{
                                width: '80%',
                                height: '50px'
                            }}
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
                        {/* {filteredcol.map((col) => (
                        <Draggable
              key={col.field}
              draggableId={col.field.toString()}
            //   index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {col.field}
                </div>
              )}
            </Draggable>
            ))} */}
                        {/* <TableHead className='tableHead'>
                            <TableRow
                                component="div"
                                sx={{
                                    display: 'flex',
                                    width: isFullWidth ? '100%' : '80%',
                                }}
                            >
                                {filteredcol.map((col) => (
                                    <TruncatedTableCell
                                        key={col.field}
                                        value={col.field}
                                        width={col.width || `${100 / (filteredcol.length || 1)}%`}
                                        isHeader
                                    />
                                ))}
                            </TableRow>
                        </TableHead> */}

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
