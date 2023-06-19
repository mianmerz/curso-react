import { TodoList, TodoAdd } from "./components";
import { useTodo } from "./hooks/useTodo";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <section>
            <h2>Todo App</h2>

            <div className="d-flex gap-5">
                <h5>Todos: {todosCount}</h5> <h5>Pendientes: {pendingTodosCount}</h5>
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
