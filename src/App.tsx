import React from 'react'
import './App.scss'
import { Home } from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Protected } from './Pages/Protected'
import { Signin } from './Pages/Signin'
import { AuthContext } from './Context/AuthContext'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: (
                <Protected>
                    <Home />
                </Protected>
            ),
        },
        {
            path: '/signin',
            element: <Signin></Signin>,
        },
    ])

    return (
        <AuthContext>
            <RouterProvider router={router}></RouterProvider>
        </AuthContext>
    )
}

export default App
