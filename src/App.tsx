import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import routes from './Routes'

function App() {
    const router = createBrowserRouter(routes)
    return (
        <AuthContext>
            <RouterProvider router={router}></RouterProvider>
        </AuthContext>
    )
}

export default App
