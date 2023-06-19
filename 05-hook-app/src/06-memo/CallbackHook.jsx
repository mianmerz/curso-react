import { useState, useCallback } from 'react';
import { Small } from './components/Small';
import { ShowIncrement } from './components/ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementCallback = useCallback((value) => {
        setCounter((counter) => counter + value);
    }, [])

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <section>
            <h2>useCallback hook</h2>

            <div className="d-flex gap-5">
                <h5>Counter: <Small value={counter} /> </h5>
            </div>

            <hr />

            <ShowIncrement increment={incrementCallback} />

        </section>
    )
}
