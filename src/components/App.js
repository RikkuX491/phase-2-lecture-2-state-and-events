import Header from "./Header"
import PetPage from "./PetPage"
import {useState} from "react"

function App() {

  // Creating State - searchText is the stateful variable which is created and initialized with a value of ""
  // setSearchText is the setter function which is used to update the value of searchText, the stateful variable
  const [searchText, setSearchText] = useState("")

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  const filteredPets = pets.filter(pet => {
    if(searchText === ""){
      return true
    }
    return pet.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div className="app">
      <Header />
      <PetPage pets={filteredPets} setSearchText={setSearchText}/>
    </div>
  );
}

export default App;