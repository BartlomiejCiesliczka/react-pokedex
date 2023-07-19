import './style/App.css';
import Loading from 'react-simple-loading';
import { useEffect, useState } from "react";
import { ListOfPokemons } from './components/ListOfPokemons';
import { ListOfPokemonsPagination } from './components/ListOfPokemonsPagination';
import { Searchbar } from './components/Searchbar';
import { ListOfPokemonControlButton } from './components/ListOfPokemonControlButton';

function App() {
const [currentPageUrl, setCurrentPageUrl] =useState(`https://pokeapi.co/api/v2/pokemon`)
const [pokeName, setPokeName] = useState([])
const [nextPage, setNextPage] = useState('')
const [prevPage, setPrevPage] = useState('')
const [loading, setLoading] =useState(true)
const [showPokemonListHTML, setShowPokemonListHTML] = useState('Show list of Pokemon')


const getPokemons = async () => {
  try{
    setLoading(true)
    let res = await fetch(currentPageUrl)
    let data = await res.json()
    setNextPage(data.next)
    setPrevPage(data.previous)
    setPokeName(data.results.map(p => p.name))
    setLoading(false)
  } catch (error) {
      alert("Błąd ładowania danych app.js", error)
  }
}

useEffect(() => {
  getPokemons()
}, [currentPageUrl])

  return (
    <>
      {loading? 
      (
        <Loading />
      ):(
          <div className="main">
            <div className="pokedex">
              <h1 
                className='title' 
                onClick={() => setCurrentPageUrl('https://pokeapi.co/api/v2/pokemon')}>
                  POKEDEX
              </h1>
              <Searchbar />
              <ListOfPokemonControlButton 
                showPokemonListHTML={showPokemonListHTML} 
                setShowPokemonListHTML={setShowPokemonListHTML}/>
              {showPokemonListHTML === 'Hide list of Pokemon'? (
                <>
                  <ListOfPokemonsPagination prevPage={prevPage} nextPage={nextPage} setCurrentPageUrl={setCurrentPageUrl}/>
                  <div className="list-of-pokemon">
                    {pokeName.map(name =>
                      <ListOfPokemons pokemon={name}/>
                    )}
                  </div>
                </>
                ): null}
            </div>
          </div>
        )
      }
    </>
  );
}

export default App;
