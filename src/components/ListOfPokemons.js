import { useState, useEffect } from "react"
import Loading from 'react-simple-loading';
import { PokemonTile } from "./PokemonTile";

export function ListOfPokemons({pokemon}){

  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] =useState(true)
  const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  useEffect(()=>{
    setLoading(true)
    fetch(PokeURL)
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)
      setLoading(false);
    })
    .catch(error => alert("Błąd ładowania danych ", error));
  }, [pokemon])
  
  if (loading) return (
    <div>
      <Loading />
    </div>
  )

  return(
    <>
      {loading? <Loading /> : <PokemonTile key={pokemonData.id} pokemonData={pokemonData}/>}
    </>
    )
}
