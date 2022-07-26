import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    console.log("categories", categories);

    const onAddCategory = (category) => {
        console.log("new category", category);

        if (categories.includes(category)) return;

        setCategories(categories => [category, ...categories]);

        // setCategories(cat => [...cat, "valorant"]);
        // setCategories([...categories,"A"]);
    }



    return (
        <>
            {/* titulo */}
            <h1>Git Expert App </h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            // setCategories={setCategories} 
            />

            {/* Listado de Gif */}
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
            {/* {categories.map(c => <li key={c}> {c} </li>)} */}

            {/* Gif Item */}
        </>
    )
}
