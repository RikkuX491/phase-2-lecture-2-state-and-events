import {useState} from 'react'

function Pet({pet}){

    const [favorited, setFavorited] = useState(false)
    const [counter, setCounter] = useState(0)

    const buttonClass = favorited ? "favorite-button active" : "favorite-button"
    const star = favorited ? '★' : '☆'

    function updateCounter(){
        setCounter(counter + 1)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={() => {
                setFavorited(!favorited)
            }} className={buttonClass}>{star}</button>
            <h4>{pet.name}</h4>
            <h1 onClick={updateCounter}>{counter}</h1>
        </li>
    )
}

export default Pet;