import { useState, useCallback } from 'react';
import { Hijo } from './Hijo'

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
        setValor((valor) => valor + num)
    }, [])

    return (
        <section>
            <h2>Tarea reducer</h2>

            <div className="d-flex gap-5">
                <h5>Total: {valor} </h5>
            </div>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }

        </section>
    )
}
