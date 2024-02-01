import React, { useContext, useMemo } from 'react'
import {
    MaterialReactTable,
    type MRT_ColumnDef,
    MRT_EditActionButtons,
    useMaterialReactTable,
} from 'material-react-table'
import { getAuth, signOut } from 'firebase/auth'
import { Context } from '../Context/AuthContext'
import { Serie } from '@nivo/line'
import { Button, DialogActions, DialogContent } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import classes from './Admin.module.scss'
import { getDatabase, push, ref, set } from 'firebase/database'
import { findIndex, map, toNumber } from 'lodash'

export const Admin = () => {
    const auth = getAuth()
    const db = getDatabase();
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
                editVariant: 'select',
                editSelectOptions: map(data, (d) => d.id as string),
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
        [data],
    )

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
        onCreatingRowSave: (saveData) => {
            // console.log(data, saveData.values.id)
            const indexOfSerie = findIndex(data, (d) => {
                return d.id === saveData.values.id
            });
            const postListRef = ref(db, `series/${indexOfSerie}/data`);
            const newPostRef = push(postListRef);
            void set(newPostRef, {
                x: saveData.values.x,
                y: toNumber(saveData.values.y)
            });
        },
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    {internalEditComponents} {/* or render custom edit components here */}
                </DialogContent>
                <DialogActions>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <Button
                variant="text"
                onClick={() => {
                    table.setCreatingRow(true) //simplest way to open the create row modal with no default values
                }}
            >
                Add
            </Button>
        ),
    })

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark',
                },
            }),
        [],
    )

    return <div className={classes.container}>
        <ThemeProvider theme={tableTheme}>
            <MaterialReactTable table={table}
            />
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
}

