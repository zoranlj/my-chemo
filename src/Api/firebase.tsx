//CREATE action
import { MRT_Row, MRT_TableOptions } from 'material-react-table'
import { Serie } from '@nivo/line'
import { toNumber } from 'lodash'
import { getDatabase, push, ref, remove, set, update } from 'firebase/database'
import { getAuth, signOut } from 'firebase/auth'

export const handleOnCreatingRowSave: MRT_TableOptions<Serie>['onCreatingRowSave'] =
    ({ row, table, values }) => {
        const db = getDatabase()
        console.log(row.getParentRow())
        const postListRef = ref(db, `series/${row.getParentRow()?.index}/data`)
        const newPostRef = push(postListRef)
        void set(newPostRef, {
            x: values.x,
            y: toNumber(values.y),
        })
        table.setCreatingRow(null) //exit created mode
    }

//UPDATE action
export const handleOnEditingRowSave: MRT_TableOptions<Serie>['onEditingRowSave'] =
    ({ values, table, row }) => {
        const db = getDatabase()
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

//DELETE action
export const handleOnDeleteRow = (row: MRT_Row<Serie>) => {
    const db = getDatabase()
    const path = `series/${row.getParentRow()?.index}/data/${row.original.key}`
    const rowRef = ref(db, path)
    if (window.confirm('Are you sure you want to delete this user?')) {
        void remove(rowRef)
    }
}

export const handleSignOut = async () => {
    const auth = getAuth()
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}
