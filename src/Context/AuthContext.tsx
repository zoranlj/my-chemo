import {
    createContext,
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth'
import { getDatabase, onValue, ref } from 'firebase/database'
import { Serie } from '@nivo/line'

type ValueProp = {
    user: User
    setUser: Dispatch<SetStateAction<User>>
    series: Serie[]
}
export const Context = createContext({} as ValueProp)

export const AuthContext = ({ children }: { children: ReactElement }) => {
    const auth = getAuth()
    const [user, setUser] = useState({} as User)
    const [series, setSeries] = useState<Serie[]>([])
    const [loading, setLoading] = useState(true)
    const db = getDatabase()

    const starCountRef = ref(db, 'series/')

    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            setSeries(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        user,
        setUser,
        series,
    }

    return (
        <Context.Provider value={values}>
            {!loading && children}
        </Context.Provider>
    )
}
