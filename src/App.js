import './App.css';
import { useEffect, useState } from "react";
import { ShowPokemon } from './showPokemon';

function App() {

const [currentPageUrl, setCurrentPageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
const [pokeName, setPokeName] = useState([])
const [allPokemon, setAllPokemon] = useState([])
const [nextPage, setNextPage] = useState('')


const getPokemons = async () => {
  let res = await fetch(currentPageUrl)
  let data = await res.json()
  setNextPage(data.next) // display 20 more pokemon (btn in future)
  setPokeName(data.results.map(p => p.name))

  function createPokemonObject(result) {
    result.forEach(async (pokemon) => {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      let data = await res.json()
      setAllPokemon(currentList => [...currentList, data])
    })
  }

  createPokemonObject(pokeName)
}


useEffect(() => {
  getPokemons()
}, [])



console.log(allPokemon) 
console.log(pokeName) // display on first load

  return (
    <>
      <div className="main">
        <div className="pokedex">
          <h1 className='title'>POKEDEX</h1>
          <div className="poke-list">
            {allPokemon.map(data =>
              <ShowPokemon data={data}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
