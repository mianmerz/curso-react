import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onReset } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState;


    return (
        <section>
            <h2>Formulario with custom hook</h2>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="text" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange} />
            <input type="password" className="form-control mt-2" placeholder="Password" name="password" value={password} onChange={onInputChange} />

            <button className="btn btn-danger mt-2" onClick={onReset}>Reset</button>
        </section>
    )
}
