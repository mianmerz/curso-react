import { fireEvent, render, screen } from "@testing-library/react";

import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/pages/PageLogin";

describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrarse correctamente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith({ "email": "miguel@gmail.com", "id": 123, "name": "Miguelo" })
    });
});