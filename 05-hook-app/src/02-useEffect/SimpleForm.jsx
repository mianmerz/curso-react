import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'miguelo',
        email: 'miguel@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("Inicial")
    }, []);

    useEffect(() => {
        // console.log("Form change")
    }, [formState]);

    useEffect(() => {
        // console.log("Username change")
    }, [username]);


    return (
        <section>
            <h2>Formulario Simple</h2>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="text" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange} />
        
            { (username === 'miguelo2') && <Message />}
        </section>
    )
}
