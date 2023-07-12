import './App.css';
import { useEffect, useState } from "react";
import { ShowPokemonAsync } from './showPokemon';
import { ShowPokemonUseEffect } from './showPokemonUseEffect';

function App() {

const [currentPageUrl, setCurrentPageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
const [pokeName, setPokeName] = useState([])
const [nextPage, setNextPage] = useState('')


const getPokemons = async () => {
  let res = await fetch(currentPageUrl)
  let data = await res.json()
  setNextPage(data.next) // display 20 more pokemon (btn in future)
  setPokeName(data.results.map(p => p.name))
}


useEffect(() => {
  getPokemons()
}, [])

console.log(pokeName)

  return (
    <>
      <div className="main">
        <div className="pokedex">
          <h1 className='title'>POKEDEX</h1>
          <div className="poke-list">
            {pokeName.map(name =>
              <ShowPokemonUseEffect pokeName={name}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
