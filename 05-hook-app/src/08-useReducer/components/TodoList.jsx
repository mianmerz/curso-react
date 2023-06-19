import { TodoItem } from "./index"

export const TodoList = ({ todos = [], handleDeleteTodo }) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />)
            }

        </ul>
    )
}
