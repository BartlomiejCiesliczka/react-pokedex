import "./Tile.css";

export function Tile({ pokemonData }) {
  return (
    <div className="tile">
      <div className="tile__imgContainer">
        <img className="tile__img" src={pokemonData.sprites.front_default} />
      </div>
      <p className="tile__name">{pokemonData.name}</p>
      <p className="tile__ID">#{pokemonData.id}</p>
    </div>
  );
}
