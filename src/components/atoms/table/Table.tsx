import React, { forwardRef, useState } from 'react';
import { TableVirtuoso, type TableComponents } from 'react-virtuoso';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import './Table.css';
export interface ColumnConfig<T> {
    field: keyof T | string;
    headerName: string;
    width?: number | string;
    renderCell?: (row: T) => React.ReactNode;
}

interface ReusableVirtualTableProps<T> {
    data: T[];
    columns: ColumnConfig<T>[];
    height?: number | string;
}

const MUIVirtuosoComponents: TableComponents<any> = {
    Scroller: forwardRef<HTMLDivElement, any>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} style={{ ...props.style, borderCollapse: 'separate' }} />
    ),
    TableHead: forwardRef<HTMLTableSectionElement, any>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableBody: forwardRef<HTMLTableSectionElement, any>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
    TableRow: (props) => <TableRow {...props} />,
};

export function ReusableVirtualTable<T extends { id: string | number }>({
    data,
    columns,
    height = 450,
}: ReusableVirtualTableProps<T>) {

    const fixedHeaderContent = () => (
        <TableRow sx={{ backgroundColor: 'background.paper' }}>
            {columns.map((column) => (
                <TableCell
                    key={String(column.field)}
                    variant="head"
                    style={{ width: column.width }}
                    sx={{ fontWeight: 'bold' }}
                >
                    {column.headerName}
                </TableCell>
            ))}
        </TableRow>
    );

    const itemContent = (_index: number, row: T) => (
        <>
            {columns.map((column) => {
                const value = row[column.field as keyof T];
                return (
                    <TableCell key={String(column.field)}>
                        {column.renderCell ? column.renderCell(row) : (value as React.ReactNode)}
                    </TableCell>
                );
            })}
        </>
    );
    const [fullSize, setFullsize] = useState(false);
    return (
        <div style={{ height, width: '100%' }}>
            <Button onClick={() => setFullsize(!fullSize)}>{fullSize ? 'maxsize' : 'minsize'}</Button>
                <TableVirtuoso
                className={`table-container ${fullSize ? 'table-container--fullsize' : ''}`}
                data={data}
                components={MUIVirtuosoComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={itemContent}
            />
        </div>
    );
}
