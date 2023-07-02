import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrarse correctamente por defecto', () => {
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        
        expect(nextButton.disabled).toBeTruthy() ;
    });
});