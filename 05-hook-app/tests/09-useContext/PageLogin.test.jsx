import { render, screen } from "@testing-library/react";

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
});