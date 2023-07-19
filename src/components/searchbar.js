import '../style/Searchbar.css';
import { useState, useEffect } from "react"
import Loading from 'react-simple-loading';
import { PokemonDetailData } from "./PokemonDetailData";

export function Searchbar({}){
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonNameOrID, setPokemonNameOrID] = useState('')
  const [exist, setExist] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isFound, setisFound] = useState('')
  const SpecyficURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrID}`

  const searchPokemon = async() => {
      try{
        setLoading(true)
        setExist(false)
        let res = await fetch(SpecyficURL)
        let data = await res.json()
        setPokemonData(data)
        setisFound('')
        setPokemonNameOrID('')
        setLoading(false)
        setExist(true)
      }
      catch (error) {
        alert("Błąd ładowania danych search.js", error)
        setisFound("Pokemon not found :/")
        setLoading(false)
      }
  }

  if (loading) return (
    <div>
      <Loading />
    </div>
  )

  return(
    <>
    <div className="searchbar-container">
      <input
      className="Pokemon-searchbar" 
      value={pokemonNameOrID}
      onChange = {e => setPokemonNameOrID(e.target.value)}
      onKeyDown= {e => {if (e.key === 'Enter' && pokemonNameOrID.length > 0 && pokemonNameOrID != 0){searchPokemon()}}} 
      placeholder="Enter Pokemon or ID"
      type="search" />
      <button onClick={() => {
        searchPokemon()
        }}>
        img lupy 
      </button>
    </div>
    {isFound}
    {exist && <PokemonDetailData key={pokemonData.id} pokemonData={pokemonData} />}
    </>
  )
}