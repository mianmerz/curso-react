import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const { counter1, counter2, counter3 } = counter;

    const add = (index) => {
        setCounter(currentState => (
            {
                ...currentState,
                [index]: currentState[index] + 1
            }
        ))
    }

    return (
        <section >
            <h2>Counter with hook</h2>

            <div className="d-flex gap-5">
                <h5>Counter1: {counter1}</h5>
                <h5>Counter2: {counter2}</h5>
                <h5>Counter3: {counter3}</h5>
            </div>

            <hr />

            <button className="btn btn-primary" onClick={() => { add("counter1") }}>
                +1 Counter 1
            </button>

            <button className="btn btn-primary" onClick={() => { add("counter2") }}>
                +1 Counter 2
            </button>

            <button className="btn btn-primary" onClick={() => { add("counter3") }}>
                +1 Counter 3
            </button>
        </section>
    )
}
