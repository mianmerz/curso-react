import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const HomePage = () => {
    const { user } = useContext(UserContext);

    return (
        <main>
            <h4>Home page</h4>

            <span>
                {user?.name}
            </span>

            <pre>{JSON.stringify(user, null, 3)}</pre>


        </main>
    )
}
