import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter, increment, reset, decrement } = useCounter();


    return (
        <section>
            <h2>CounterWithCustomHook</h2>

            <div className="d-flex gap-5">
                <h5>Counter with Hook: {counter}</h5>
            </div>

            <hr />

            <button className="btn btn-primary" onClick={() => decrement(8)}>-1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={() => increment(10)}>+1</button>
        </section>
    )
}
