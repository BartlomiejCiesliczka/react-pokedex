import { useState, useEffect } from "react"
import Loading from 'react-simple-loading';

export function ShowPokemon({Pokemon}){

  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] =useState(true)
  const PokeURL = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`

  useEffect(()=>{
    setLoading(true)
    fetch(PokeURL)
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)
      setTimeout(() => {
        setLoading(false);
      }, "300");
    })
    .catch(error => alert("Błąd ładowania danych", error));
  }, [Pokemon])

  
  if (loading) return (
    <div>
      <Loading />
    </div>
  )

  return(
    <div className="poke-container">
      <div className="img-container">
        <img className='poke-img' src={pokemonData.sprites.front_default}/>
      </div>
      <p className='poke-name'>{pokemonData.name}</p>
      <p className='poke-ID'>#0{pokemonData.id}</p>
    </div> 
    )
}
