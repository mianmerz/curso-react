import { renderHook, act } from "@testing-library/react";
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

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const newValue = "Juan";

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        
        act(() => {
            onInputChange({
                target: { name: 'name', value: newValue }
            });
        });
        
        const { formState } = result.current;

        expect(formState).toEqual({ ...initialForm, name: newValue });
        expect(result.current.name).toBe(newValue);
    });

    test('debe de re-establecer el formulario con RESET', () => {
        const newValue = "Juan";

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onReset } = result.current;
        
        act(() => {
            onInputChange({
                target: { name: 'name', value: newValue }
            });
            onReset();
        });
        
        const { formState } = result.current;

        expect(formState).toEqual(initialForm);
    });
});