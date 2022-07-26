export const getGifs = async (category) => {
    let url = "https://api.giphy.com/v1/gifs/search?api_key=y7Xvv71ftjP3eaGzdo56UJEO1oXhXm4m";
    url += "&q=" + category;
    url += "&limit=" + 20;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
}
