import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retornar una URL de la imagen', async () => {

        const response = await getImagen();
        console.log(response);

        expect(typeof response).toBe("string");
    });
});