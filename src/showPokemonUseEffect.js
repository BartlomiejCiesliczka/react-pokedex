import { useState, useEffect } from "react"

export function ShowPokemonUseEffect({pokeName}){

  const [allPokemon, setAllPokemon] = useState([])
  const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

  useEffect(()=>{
    fetch(PokeURL)
    .then(response => response.json())
    .then(data => {
      setAllPokemon(currentList => [...currentList, data])
    })
  }, [])

  return(
    allPokemon.map(data =>
      <div className="poke-container">
        <div className="img-container">
          <img className='poke-img' src={data.sprites.front_default}/>
        </div>
        <p className='poke-name'>{data.name}</p>
        <p className='poke-ID'>#0{data.id}</p>
      </div>  
    )
  )
}