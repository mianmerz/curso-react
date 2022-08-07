import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        })
    });



    test('getHeroByIdAsync debe retornar error si heroe no existe', (done) => {
        const id = 212;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
            console.log(error);

            expect(error).toBe("No se pudo encontrar el héroe");

            done();

        })
    });
});