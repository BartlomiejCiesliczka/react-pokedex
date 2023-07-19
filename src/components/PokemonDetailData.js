import '../style/PokemonDetailData.css';

export function PokemonDetailData({pokemonData}){
  return(
    <div className="detail-container">
      <p className="detail-name">{pokemonData.name} <span className="detail-id">#0{pokemonData.id}</span></p>
      <div className="detail-pokemon-data">
        <div className='detail-img-container'>
          <img className='detail-img' src={pokemonData.sprites.other.dream_world.front_default}/>
        </div>
        <div className="stats">
            <div className="stats-container">
              <ul>
              {pokemonData.stats.map(stats =>
                <li className="stat-name">{stats.stat.name}</li>
                )}
              </ul>
              <ul>
              {pokemonData.stats.map(stats =>
                <li className="stat-value">{stats.base_stat}</li>
              )}
              </ul>
            </div>
        </div>
        <div className="types">
          <p className="property-title">Type</p>
            <div className="multiple-type">
              {pokemonData.types.map(number =>
                <p >{number.type.name}</p>
              )}
            </div>
        </div>
        <div className="Weaknesses-container">
          <p className="property-title">Weaknesses</p>
            <div className="detail-multiple-type">
              Soon...
            </div>
        </div>
      </div>
    </div>
  )
}