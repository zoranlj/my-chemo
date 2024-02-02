import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import routes from './Routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const App = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })
    const router = createBrowserRouter(routes)

    return (
        <AuthContext>
            <ThemeProvider theme={darkTheme}>
                <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
        </AuthContext>
    )
}

export default App
