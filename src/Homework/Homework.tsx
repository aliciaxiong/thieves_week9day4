import "./Homework.css";
import { useState } from "react";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strGlass: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
}

const Homework = () => {
    const [search_Input, setSearch_Input] = useState("");
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch_Input(event.target.value);
    };
    
    const getCocktails = async () => {
        const response = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${search_Input}`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "9fdc2053c1msh88688d8bdf9733fp186fcdjsn254d5049c897",
                "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
            },
        });

        const data = await response.json()
        setCocktails(data.drinks)
        console.log(data);
    };

    return (
        <>
            <h1>Cocktails! Cocktails! Cocktails!</h1>

            <div className="cocktail-input-container">
                <input type="text" placeholder="Search for a cocktail" value={search_Input} onChange={handleInput}/>
                    <div>
                        <button onClick={getCocktails}>Search</button>        
                    </div>
                
            </div>

            <div className="cocktail-container">
                {cocktails.map((cocktail) => (   
                    <div key={cocktail.idDrink} className="cocktail-card">
                        <h2>{cocktail.strDrink}</h2>                            
                        <p><b>Glass Type:</b> {cocktail.strGlass}</p>
                        <p><b>Ingredients:</b> {cocktail.strIngredient1}, {cocktail.strIngredient2}, {cocktail.strIngredient3}, {cocktail.strIngredient4}, {cocktail.strIngredient5}</p>
                        <p><b>Instructions:</b> {cocktail.strInstructions}</p>
                    </div>
                ))}
            </div>
        </>
);
}
export default Homework