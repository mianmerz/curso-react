import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'miguel',
        email: 'miguel@email.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function)
        });

    });
});