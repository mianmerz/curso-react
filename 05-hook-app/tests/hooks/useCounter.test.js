const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('Pruebas en el useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        
    });
});