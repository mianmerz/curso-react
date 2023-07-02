import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const HomePage = () => {
    console.log("oaisdjoiajsd")
    const { user } = useContext(UserContext);
    return (
        <main>
            <h4>Home page</h4>

            <span>
                {user?.name}
            </span>

            <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>


        </main>
    )
}
