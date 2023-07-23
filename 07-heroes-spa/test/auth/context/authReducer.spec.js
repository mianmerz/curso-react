
import { authReducer } from '../../../src/auth/context/authReducer';

describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false })

    })

    test('debe de autenticar y colocar el name del usuario', () => {

    })

    test('debe de borrar el name del usuario y logged en false', () => {

    })
})