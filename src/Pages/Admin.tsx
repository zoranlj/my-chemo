import React, { useContext, useMemo } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { getAuth, signOut } from 'firebase/auth'
import { Context } from '../Context/AuthContext'
import { Serie } from '@nivo/line'
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import classes from './Admin.module.scss'

export const Admin = () => {
    const auth = getAuth()
    const { series: data } = useContext(Context)

    const handleSignOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = useMemo<MRT_ColumnDef<Serie>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Side Effect',
            },
            {
                accessorKey: 'x',
                header: 'Date',
            },
            {
                accessorKey: 'y',
                header: 'Intensity',
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableExpandAll: true,
        enableExpanding: true,
        enablePagination: true,
        enableFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        enableBottomToolbar: false,
        getSubRows: (row) => row.data as Serie[],
        paginateExpandedRows: false,
        defaultColumn: {
            size: 100, //default size is usually 180
        },
        displayColumnDefOptions: {
            'mrt-row-expand': {
                size: 40,
                grow: false,
            },
        },
        initialState: { density: 'compact' },
    });

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: "dark"
                    },
            }),
        [],
    );

    return <div className={classes.container}>
        <ThemeProvider theme={tableTheme}>
            <MaterialReactTable table={table} />
        </ThemeProvider>
        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
                void handleSignOut()
            }}
        >
            Sign Out
        </Button>
    </div>
};

