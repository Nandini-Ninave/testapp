import { describe, expect, it } from "vitest";
import { ReusableVirtualTable } from "./Table";
import { render, screen } from "@testing-library/react";

describe(ReusableVirtualTable, ()=>{
    it('should render atable with header and body',()=>{
        const column =  [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
        ]
        const data = [{ id: 1, name: 'John Doe', age: 30, location: 'New York' }]
        render(<ReusableVirtualTable data={data} columns={column}/>)
        const columnheader = screen.getByRole("columnheader",{name:"Name"})
        // const cellName = screen.getByRole("cell", { name: "John Doe" })
        expect(columnheader).toBeInTheDocument()
        // expect(cellName).toBeInTheDocument()
    })
})