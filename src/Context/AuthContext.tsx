import {
    createContext,
    useState,
    useEffect,
    ReactElement,
    Dispatch,
    SetStateAction,
} from 'react'
import { getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth'

type ValueProp = {
    user: User
    setUser: Dispatch<SetStateAction<User>>
}
export const Context = createContext({} as ValueProp)

export const AuthContext = ({ children }: { children: ReactElement }) => {
    const auth = getAuth()
    const [user, setUser] = useState({} as User)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsubscribe: Unsubscribe
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            if (currentUser) setUser(currentUser)
            else {
                setUser({} as User)
            }
        })
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [auth])

    const values = {
        user: user,
        setUser: setUser,
    }

    return (
        <Context.Provider value={values}>
            {!loading && children}
        </Context.Provider>
    )
}
