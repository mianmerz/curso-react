import { types } from "../../../src/auth";

describe('Pruebas en types', () => {

    test('debe de tener estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })

});