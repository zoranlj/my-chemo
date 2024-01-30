import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import Button from '@mui/material/Button'

export const Admin = () => {
    const auth = getAuth()

    async function handleSignOut() {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>This is the admin in page</h1>

            <Button
                type="submit"
                fullWidth
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
