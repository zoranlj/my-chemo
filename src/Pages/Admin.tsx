import React, { useContext, useMemo } from 'react'
import {
    MaterialReactTable,
    type MRT_ColumnDef,
    MRT_EditActionButtons,
    MRT_Row,
    MRT_TableOptions,
    useMaterialReactTable,
} from 'material-react-table'
import { getAuth, signOut } from 'firebase/auth'
import { Context } from '../Context/AuthContext'
import { Serie } from '@nivo/line'
import { Button, DialogActions, DialogContent, IconButton } from '@mui/material'
import classes from './Admin.module.scss'
import { getDatabase, push, ref, set, update, remove } from 'firebase/database'
import { findIndex, map, toNumber } from 'lodash'
import { Edit, Delete } from '@mui/icons-material'
import Box from '@mui/material/Box'

export const Admin = () => {
    const auth = getAuth()
    const db = getDatabase()
    const { series } = useContext(Context)

    const handleSignOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    //CREATE action
    const handleOnCreatingRowSave: MRT_TableOptions<Serie>['onCreatingRowSave'] =
        ({ values }) => {
            const indexOfSerie = findIndex(series, (d) => {
                return d.id === values.id
            })
            const postListRef = ref(db, `series/${indexOfSerie}/data`)
            const newPostRef = push(postListRef)
            void set(newPostRef, {
                x: values.x,
                y: toNumber(values.y),
                id: values.id,
            })
            table.setCreatingRow(null) //exit created mode
        }

    //UPDATE action
    const handleOnEditingRowSave: MRT_TableOptions<Serie>['onEditingRowSave'] =
        async ({ values, table, row }) => {
            const path = `series/${row.getParentRow()?.index}/data/${values.key}`
            const updates = {}
            // @ts-ignore
            updates[path] = {
                x: values.x,
                y: toNumber(values.y),
                id: values.id,
            }
            void update(ref(db), updates)
            table.setEditingRow(null) //exit editing mode
        }

    const handleOnDeleteRow = (row: MRT_Row<Serie>) => {
        const db = getDatabase()
        const path = `series/${row.getParentRow()?.index}/data/${row.original.key}`
        const rowRef = ref(db, path)
        if (window.confirm('Are you sure you want to delete this user?')) {
            void remove(rowRef)
        }
    }

    const columns = useMemo<MRT_ColumnDef<Serie>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Side Effect',
                editVariant: 'select',
                editSelectOptions: map(series, (d) => d.id as string),
                muiEditTextFieldProps: {
                    required: true,
                },
            },
            {
                accessorKey: 'key',
                header: 'Key',
                enableEditing: false,
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
        [series]
    )

    const table = useMaterialReactTable({
        columns,
        data: series,
        enableEditing: true,
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
        initialState: { density: 'compact', columnVisibility: { key: false } },
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
        renderCreateRowDialogContent: ({
            table,
            row,
            internalEditComponents,
        }) => (
            <>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {internalEditComponents}{' '}
                    {/* or render custom edit components here */}
                </DialogContent>
                <DialogActions>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <MRT_EditActionButtons
                        variant="text"
                        table={table}
                        row={row}
                    />
                </DialogActions>
            </>
        ),
        renderEditRowDialogContent: ({
            table,
            row,
            internalEditComponents,
        }) => (
            <>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {internalEditComponents}{' '}
                    {/* or render custom edit components here */}
                </DialogContent>
                <DialogActions>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <MRT_EditActionButtons
                        variant="text"
                        table={table}
                        row={row}
                    />
                </DialogActions>
            </>
        ),
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => handleOnDeleteRow(row)}
                >
                    <Delete />
                </IconButton>
            </Box>
        ),
        onCreatingRowSave: handleOnCreatingRowSave,
        onEditingRowSave: handleOnEditingRowSave,
    })

    return (
        <div className={classes.container}>
            <MaterialReactTable table={table} />
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
    )
}
