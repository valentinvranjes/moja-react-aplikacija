import { useState, useEffect } from "react";

export default function AppAPI () {
    const [data, setData] = useState(null); //destrukturira ili kompozira novi state

useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(nasaData => setData(nasaData));
}, []);


// hack nemoj ovo ispod const, u slučaju da nisi dohvatio podatke vrati Loading NASA data
if (!data) {
    return <div>Loading NASA data</div>;
}

const { title, url, explanation, copyright, hdurl } = data;
return (
    <div>
        <h1>NASA picture of the day</h1>
        <h3>{title}</h3>
        <p>{explanation}</p>
        <img src={url} alt={title} width={500} />
        <p>{copyright}</p>
        <a href={hdurl} target="blank">Za bolju rezoluciju kliknite ovdje</a>
    </div>
);
}