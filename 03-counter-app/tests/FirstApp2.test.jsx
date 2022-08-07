/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => {
    const title = "Hola, soy Migue";
    const subtitle = "Soy un subtitulito";

    test('Debe de hacer Match con el Snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar el mensaje "Hola, soy Migue', () => {
        render(<FirstApp title={title} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });


    test('Debe de mostrar el titulo en un H1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title)
    });


    test('Debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle} />);

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});