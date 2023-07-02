import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Aprender React',
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

        const spanElement = screen.getByLabelText('Cambiar estado de la tarea');
        expect(spanElement.className).toContain('user-select-none');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el Todo Completado', () => {
        todo.done = true;

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

        const spanElement = screen.getByLabelText('Cambiar estado de la tarea');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('debe de llamar la función toggleTodo', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('Cambiar estado de la tarea');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).lastCalledWith(todo.id);
    });

    test('debe de llamar la función onDeleteTodo', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).lastCalledWith(todo.id);
    });
})