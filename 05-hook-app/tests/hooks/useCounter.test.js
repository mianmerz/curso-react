const { renderHook, act } = require("@testing-library/react");
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

    test("Debe de generar el counter con el valor de 100", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test("Debe de incrementar el counter en 1", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        })

        const { counter } = result.current;

        expect(counter).toBe(103);
    });

    test("Debe de decrementar el counter en 1", () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        const { counter } = result.current;

        expect(counter).toBe(97);
    });

    test("Debe resetear el counter", () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        })

        const { counter } = result.current;

        expect(counter).toBe(100);
    });

});
