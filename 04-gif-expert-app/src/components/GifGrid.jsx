import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    console.log("category", category);

    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
            }
        </>
    )
}
