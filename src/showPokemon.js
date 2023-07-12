import { useState, useEffect } from "react"

export function ShowPokemonAsync({pokeName}){

  const [allPokemon, setAllPokemon] = useState([])

const createPokemonObject = async (result) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${result}`)
    let data = await res.json()
    setAllPokemon(currentList => [...currentList, data])
}

  useEffect(() =>{
    createPokemonObject(pokeName)
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