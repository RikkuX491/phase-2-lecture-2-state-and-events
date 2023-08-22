function Pet({pet}){

    const buttonClass = false ? "favorite-button active" : "favorite-button"
    const star = false ? '★' : '☆'

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button className={buttonClass}>{star}</button>
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;