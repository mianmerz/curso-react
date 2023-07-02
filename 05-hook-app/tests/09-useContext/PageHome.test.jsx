import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/pages/PageHome";

describe('Pruebas en <Pagehome />', () => {
    test('debe de mostrarse correctamente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />;
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de mostrarse correctamente con el usuario', () => {
        const user = {
            id: 1,
            name: 'Fernando',
            email: 'fernando@google.com'
        }

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />;
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id + "");
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));

    });
}); 