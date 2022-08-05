import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    console.log("category", category);

    // const [counter, setCounter] = useState(10);
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        console.log("newImages", newImages)
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image => (
                        // <li key={id} > {title}</li>
                        <GifItem 
                        key={image.id} 
                        title={image.title} />)
                        )
                }

            </div>

        </>
    )
}
