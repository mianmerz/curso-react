import { useState } from 'react';
import { useCounter } from '../hooks/useCounter'
import { Small } from './components/Small';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Here we go...');
    }

    return `${iterationNumber} iterations done`;
}

export const MemoHook = () => {
    const { counter, increment, reset, decrement } = useCounter(4000);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <section>
            <h2>Memo hook</h2>

            <div className="d-flex gap-5">
                <h5>Counter: <Small value={counter} /> </h5>
            </div>

            <hr />

            <h4>{memorizedValue}</h4>

            <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>


            <button className='btn btn-outline-primary'
                onClick={() => setShow(!show)}
            > Show/Hide {JSON.stringify(show)}</button>
        </section>
    )
}
