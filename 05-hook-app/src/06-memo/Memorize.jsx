import { useState } from 'react';
import { useCounter } from '../hooks/useCounter'
import { Small } from './components/Small';

export const Memorize = () => {
    const { counter, increment, reset, decrement } = useCounter(10);
    const [show, setShow] = useState(true);


    return (
        <section>
            <h2>Counter with custom Hook</h2>

            <div className="d-flex gap-5">
                <h5>Counter: <Small value={counter} /> </h5>
            </div>

            <hr />

            <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>


            <button className='btn btn-outline-primary'
                onClick={() => setShow(!show)}
            > Show/Hide { JSON.stringify(show)}</button>
        </section>
    )
}
