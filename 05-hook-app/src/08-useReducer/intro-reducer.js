
const initialState = [
    {
        id: 1,
        todo: "Recolectar la piedra del alma",
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if (action?.type === 'ADD_TODO') {
        return [...state, action.payload];
    }

    return state;
}


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Recolectar las gemas del poder",
    done: false
}

const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log("TODOS", todos);