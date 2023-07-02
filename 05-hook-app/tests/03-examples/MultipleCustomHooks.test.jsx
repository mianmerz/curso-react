import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrarse correctamente por defecto', () => {
        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data:[{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false ,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('BreakingBad Quotes'));
        expect(screen.getByText('Fernando'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();


    })
});