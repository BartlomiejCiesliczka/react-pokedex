export function ShowPokemon({data}){
  return(
    <div className="poke-container">
      <div className="img-container">
        <img className='poke-img' src={data.sprites.front_default}/>
      </div>
      <p className='poke-name'>{data.name}</p>
      <p className='poke-ID'>#0{data.id}</p>
    </div>
  )
}