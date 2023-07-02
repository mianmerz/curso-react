import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/08-useReducer/hooks/useTodo";

jest.mock('../../src/08-useReducer/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
    test('debe de mostrarse correctamente', () => {
        useTodo.mockReturnValue({
            todos: [
                { id: 1, description: 'Aprender React', done: true },
                { id: 2, description: 'Aprender Mongo', done: false },
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleNewTodo: jest.fn(),
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn()
        });

        render(<TodoApp />); 

        expect(screen.getByText('Aprender React (completa)')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
})