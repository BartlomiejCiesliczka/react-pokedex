import { padding } from "@mui/system";
import "./Tile.css";

export function Tile({ pokemonData }) {
  return (
    <div className="tile">
      <div className="tile__imgContainer">
        {pokemonData.sprites.front_default ? (
          <img className="tile__img" src={pokemonData.sprites.front_default} />
        ) : (
          <div style={{ textAlign: "center", padding: "85px 0" }}>
            Pic not found
          </div>
        )}
      </div>
      <p className="tile__name">{pokemonData.name}</p>
      <p className="tile__ID">#{pokemonData.id}</p>
    </div>
  );
}
