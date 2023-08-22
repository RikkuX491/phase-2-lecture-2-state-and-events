import {useState} from 'react'

function Pet({pet}){

    const [favorite, setFavorite] = useState(false)
    const [counter, setCounter] = useState(0)

    const buttonClass = favorite ? "favorite-button active" : "favorite-button"
    const star = favorite ? '★' : '☆'

    function updateFavorite(){
        setFavorite(favorite => !favorite)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button className={buttonClass} onClick={updateFavorite}>{star}</button>
            <h4>{pet.name}</h4>
            <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
        </li>
    )
}

export default Pet;