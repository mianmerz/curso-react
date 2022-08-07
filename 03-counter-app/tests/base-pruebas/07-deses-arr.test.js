import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un número', () => {

        const [letters, numbers] = retornaArreglo();
        // expect(letters).toBe("ABC");
        // expect(numbers).toBe(13);

        expect(typeof letters).toBe("string");
        expect(numbers).toEqual(expect.any(Number));

    });
});