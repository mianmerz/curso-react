import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: "Mundo", user: null }}>
            {children}
        </UserContext.Provider>
    )
}
 