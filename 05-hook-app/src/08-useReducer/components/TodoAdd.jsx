import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onReset } = useForm({
        description: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo && onNewTodo(newTodo);
        onReset();
    }

    return (
        <form >
            <input type="text" className="form-control" placeholder="Que hay que hacer?"
                name="description" value={description} onChange={onInputChange} />

            <button type="submit" className="btn btn-primary mt-3" onClick={onSubmit}>Agregar</button>
        </form>
    )
}
