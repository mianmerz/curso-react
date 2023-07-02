import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        descripcion: 'Aprender React',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe de agregar un TODO', () => {
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                descripcion: 'Aprender Node',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: 'DELETE_TODO',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });
})