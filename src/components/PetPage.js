import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets}){
    return(
        <main>
            <Search />
            <PetList pets={pets} />
        </main>
    )
}

export default PetPage;