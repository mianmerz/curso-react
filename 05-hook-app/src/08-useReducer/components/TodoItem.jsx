
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    console.log(todo);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className={"user-select-none " + (todo.done ? 'text-decoration-line-through' : '')}
                onDoubleClick={() => onToggleTodo(todo.id)}> {todo.description}  {todo.done && '(completa)'} </span>

            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
        </li>
    )
}
