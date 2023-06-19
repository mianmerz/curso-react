import { TodoList, TodoAdd } from "./components";
import { useTodo } from "./hooks/useTodo";


export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <section>
            <h2>Todo App</h2>

            <div className="d-flex gap-5">
                <h5>Todos: 10</h5> <h5>Pendientes: 2</h5>
            </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </section>
    )
}
