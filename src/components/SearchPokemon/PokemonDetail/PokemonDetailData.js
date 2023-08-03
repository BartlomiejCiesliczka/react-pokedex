import "./PokemonDetailData.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function PokemonDetailData({ pokemonData }) {
  const type = {
    backgroundColor: "#7575fa",
    padding: "10px 40px",
    margin: "5px",
    fontWeight: "900",
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };

  return (
    <div className="Pokemon-detail">
      <p className="Pokemon-detail__name">
        {pokemonData.name}
        <span className="Pokemon-detail__name--id"> #0{pokemonData.id}</span>
      </p>
      <div className="Pokemon-detail__grid">
        <div className="Pokemon-detail__img-container">
          {pokemonData.sprites.other.dream_world.front_default === null ? (
            <img
              className="Pokemon-detail__img"
              src={pokemonData.sprites.front_default}
            />
          ) : (
            <img
              className="Pokemon-detail__img"
              src={pokemonData.sprites.other.dream_world.front_default}
            />
          )}
        </div>
        <div className="Pokemon-detail__stats">
          <ul>
            {pokemonData.stats.map((stats) => (
              <li className="Pokemon-detail__stat--name">{stats.stat.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonData.stats.map((stats) => (
              <li className="Pokemon-detail__stat--value">{stats.base_stat}</li>
            ))}
          </ul>
        </div>
        <div className="Pokemon-detail__types">
          <p className="Pokemon-detail__types--title">Type</p>
          <div className="Pokemon-detail__types--multiple-type">
            {pokemonData.types.map((number) => (
              <Stack direction="row" spacing={1}>
                <Chip label={number.type.name} style={type} />
              </Stack>
            ))}
          </div>
        </div>
        <div className="Pokemon-detail__Weaknesses">
          <p className="Pokemon-detail__Weaknesses--title">Weaknesses</p>
          <div className="Pokemon-detail__Weaknesses--multiple-type">
            Soon...
          </div>
        </div>
      </div>
    </div>
  );
}
