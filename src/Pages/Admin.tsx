import React, { useContext } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import Button from '@mui/material/Button'
import { Context } from '../Context/AuthContext'
import classes from './Admin.module.scss'

export const Admin = () => {
    const auth = getAuth()
    const { series } = useContext(Context)
    console.log(series)
    async function handleSignOut() {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.container}>
            <h1>This is the admin in page</h1>

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
