import '../style/PokemonTile.css';

export function PokemonTile({pokemonData}){
  return(
    <div className="tile-container">
      <div className="tile-img-container">
        <img className='tile-img' src={pokemonData.sprites.front_default}/>
      </div>
      <p className='tile-name'>{pokemonData.name}</p>
      <p className='tile-ID'>#{pokemonData.id}</p>
    </div> 
  )
}