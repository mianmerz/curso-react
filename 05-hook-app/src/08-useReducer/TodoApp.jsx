import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList, TodoAdd } from "./components";

export const TodoApp = () => {

    const initialState = [
        {
            id: 8712391827491,
            description: 'Recolectar la piedra del alma',
            done: false
        },
        {
            id: 18931948193,
            description: 'Recolectar la piedra del poder',
            done: false
        }
    ]


    const [todos, dispatch] = useReducer(todoReducer, initialState);

    console.log("Todos", todos)


    const handleNewTodo = (newTodo) => {
        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        };
        
        dispatch(action);

        console.log("Agregando nueva tarea", newTodo)
    }



    return (
        <section>
            <h2>Todo App</h2>

            <div className="d-flex gap-5">
                <h5>Todos: 10</h5> <h5>Pendientes: 2</h5>
            </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
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
