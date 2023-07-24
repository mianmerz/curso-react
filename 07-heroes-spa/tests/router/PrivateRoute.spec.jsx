import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('PrivateRoute', () => {

    test("debe de mostrar el children si está autenticado", () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: "Juan",
                id: "123"
            }
        }

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Rutas privadas</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider >
        );

        expect(screen.getByText("Rutas privadas")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
    });



    // test("debe de mostrar el componente si está autenticado y guardar localStorage", () => {

    // });

});