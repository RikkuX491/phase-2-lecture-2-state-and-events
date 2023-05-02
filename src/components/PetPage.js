import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText}){
    return(
        <main>
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} />
        </main>
    )
}

export default PetPage;