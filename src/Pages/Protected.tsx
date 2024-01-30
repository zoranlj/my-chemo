import { Navigate } from 'react-router-dom'
import { ReactElement, useContext } from 'react'
import { Context } from '../Context/AuthContext'

export function Protected({ children }: { children: ReactElement }) {
    const { user } = useContext(Context)

    if (!user) {
        return <Navigate to="/signin" replace />
    } else {
        return children
    }
}
