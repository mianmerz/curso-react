import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe("Pruebas de GifItem", () => {
    const title = 'Saitana';
    const url = 'https://blabla.jpg';

    test('snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug()

        const { src, alt } = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toContain(alt);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
})