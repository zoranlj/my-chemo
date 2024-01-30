import React from 'react'
import { Home } from '../Pages/Home'
import { SignIn } from '../Pages/Signin'
import { Protected } from './Protected'
import { Admin } from '../Pages/Admin'

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/admin',
        element: (
            <Protected>
                <Admin />
            </Protected>
        ),
    },
]

export default routes
