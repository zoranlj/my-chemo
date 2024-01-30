import { signOut, getAuth } from 'firebase/auth'
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
            <button
                onClick={() => {
                    void handleSignOut()
                }}
            >
                Sign Out
            </button>
        </div>
    )
}
