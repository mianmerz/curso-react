import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute"
    ;
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";
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

    test("debe de navegar si estás autenticado", () => {

        const contextValue = {
            logged: true,
            user: {
                name: "Juan",
                id: "123"
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>

                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>Rutas publica</h1>
                            </ PublicRoute>
                        } />

                        <Route path="marvel" element={<h1>Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Marvel")).toBeTruthy();
    })
});