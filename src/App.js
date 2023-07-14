import './style/App.css';
import { useEffect, useState } from "react";
import { ShowPokemon } from './components//showPokemon';
import { Button } from './components/buttons';
import Loading from 'react-simple-loading';

function App() {

const [currentPageUrl, setCurrentPageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
const [pokeName, setPokeName] = useState([])
const [nextPage, setNextPage] = useState('')
const [prevPage, setPrevPage] = useState('')
const [loading, setLoading] =useState(true)


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
      alert("Błąd ładowania danych", error)
  }
  
}

useEffect(() => {
  getPokemons()
}, [currentPageUrl])

if (loading) return (
  <div>
    <Loading />
  </div>
)

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
              <ShowPokemon Pokemon={name}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
