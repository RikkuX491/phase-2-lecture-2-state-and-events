import {useState} from "react"

function Pet({pet}){

    // Creating State - favorite is the stateful variable which is created and initialized with a value of false
    // setFavorite is the setter function which is used to update the value of favorite, the stateful variable
    const [favorite, setFavorite] = useState(false)

    /* Updating State - setFavorite is invoked inside of the callback function in onClick (the click event listener) */
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            {favorite ? (
            <button onClick={() => setFavorite((favorite) => !favorite)} className="favorite-button active">★</button>
            ) : (
            <button onClick={() => setFavorite((favorite) => !favorite)} className="favorite-button">☆</button>
            )}
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;