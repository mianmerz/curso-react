import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes del useFetchGifs', () => {

        const images = [
            { id: "BAC", title: "HOASDHOADS", url: "https://Asodijaod.png" },
            { id: "BAC2", title: "HOASDHOADS", url: "https://Asodijaod.png" }
        ];

        useFetchGifs.mockReturnValue({
            images,
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});