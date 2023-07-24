import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute"
    ;
import { AuthContext } from "../../src/auth";
describe('PublicRoute', () => {

    test("debe de mostrar el children si no está autenticado", () => {

        render(
            <AuthContext.Provider value={{ logged: false }}>
                <PublicRoute>
                    <h1>Rutas publicas</h1>
                </ PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Rutas publicas")).toBeTruthy();

    });

});