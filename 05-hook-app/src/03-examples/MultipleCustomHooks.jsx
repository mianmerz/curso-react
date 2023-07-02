import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

import { LoadingQuote, Quote } from "./components";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/' + counter);

    const { author, quote } = !!data && data[0];

    return (
        <section>
            <h2>BreakingBad Quotes</h2>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
                Next Quote
            </button>

        </section>
    )
}
