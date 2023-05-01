import Pet from "./Pet"

function PetList({pets}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <main>
            <ul className="pet-list">{petComponents}</ul>
        </main>
    )
}

export default PetList;