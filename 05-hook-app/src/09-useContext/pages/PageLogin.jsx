import { useContext } from "react"
import { UserContext } from "../context/UserContext";


export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user);

    return (
        <main>
            <h4>Login page</h4>

            <span>
                subtitle
            </span>

            <pre>{JSON.stringify(user, null, 3)}</pre>

            <button className="btn btn-primary"
                onClick={() => setUser(
                    {
                        id: 123,
                        name: 'Miguelo',
                        email: 'miguel@gmail.com'
                    }
                )}> Establecer usuario</button>
        </main>
    )
}
