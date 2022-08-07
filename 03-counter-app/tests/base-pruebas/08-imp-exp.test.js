import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('ggetHeroeById debe retornar un héroe por ID', () => {
        const id = 1;

        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });


    test('ggetHeroeById debe retornar unundefined si no existe', () => {
        const id = 122;

        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toBeFalsy();
    });


    test('hetHeroesByOwner debe regresar heroes de DC', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        // expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter(h => h.owner === owner))
    });



});