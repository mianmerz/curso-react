import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();
    
    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <section>
            <h2>Focus Screen</h2>
            <hr />


            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Your name"
            ></input>



            <button className="btn btn-primary mt-3" onClick={onClick}>
                Set focus
            </button>
        </section>


    )
}
