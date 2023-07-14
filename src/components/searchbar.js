export function Searchbar({pokemon, setPokemon, searchPokemon}){
  return(
    <div className="search">
      <input 
      value={pokemon}
      onChange={e => setPokemon(e.target.value)}
      onKeyPress={searchPokemon}
      placeholder="Enter Pokemon"
      type="search" />
    </div>
  )
}