import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
    const navigate = useNavigate();

    const { searchText, onInputChange } = useForm({
        searchText: ''
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (searchText.trim().length < 1) return;
        navigate(`?q=${searchText}`, { replace: true });

    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-3">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary">
                        Search a hero
                    </div>

                    <div className="alert alert-danger">
                        No hero with <b>ABC</b>
                    </div>

                    {/* <HeroCard {...hero}></HeroCard> */}
                </div>
            </div>
        </>
    )
}
