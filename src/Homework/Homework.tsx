import "./Homework.css";
import { useState } from "react";

const Homework = () => {
    const [search_Input, setSearch_Input] = useState("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch_Input(event.target.value)
    }

    const getCocktails = async () => {
        const response = await fetch(`https://the-cocktail-db.p.rapidapi.com/${search_Input}.php`, {
            headers: {
                "X-RapidAPI-Key": "9fdc2053c1msh88688d8bdf9733fp186fcdjsn254d5049c897",
                "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
            },
        });

        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <h1>Cocktails! Cocktails! Cocktails!</h1>
            <div className="cocktail-input-container">
                <input type="text" placeholder="Search for a cocktail" value={search_Input} onChange={handleInput} />
                <button onClick={getCocktails}>Search</button>

            </div>


        </>
  )
}
export default Homework