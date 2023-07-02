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
})