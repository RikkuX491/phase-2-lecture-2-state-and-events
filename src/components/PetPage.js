import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, updateSearchText}){
    return(
        <main>
            <Search updateSearchText={updateSearchText} />
            <PetList pets={pets} />
        </main>
    )
}

export default PetPage;