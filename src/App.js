import './App.css';
import { useEffect, useState } from "react";
import { ShowPokemonAsync } from './showPokemon';
import { ShowPokemonUseEffect } from './showPokemonUseEffect';
import { Button } from './buttons';

function App() {

const [currentPageUrl, setCurrentPageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
const [pokeName, setPokeName] = useState([])
const [nextPage, setNextPage] = useState('')
const [prevPage, setPrevPage] = useState('')


const getPokemons = async () => {
  let res = await fetch(currentPageUrl)
  let data = await res.json()
  setNextPage(data.next)
  setPrevPage(data.previous)
  setPokeName(data.results.map(p => p.name))
}

function gotoPrevPage (){
  
}


useEffect(() => {
  getPokemons()
}, [currentPageUrl])

  return (
    <>
      <div className="main">
        <div className="pokedex">
          <h1 className='title'>POKEDEX</h1>
          <div className="search">
            <input 
            type="search" />
          </div>
          <Button prevPage={prevPage} nextPage={nextPage} setCurrentPageUrl={setCurrentPageUrl}/>
          <div className="poke-list">
            {pokeName.map(name =>
              <ShowPokemonUseEffect Pokemon={name}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
