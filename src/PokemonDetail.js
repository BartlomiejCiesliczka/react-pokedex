import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useParams, useLoaderData } from "react-router-dom";

export function PokemonDetail() {
  const tileStyle = {
    margin: "80px",
    width: "650px",
    height: "500px",
    border: "2px solid #000000",
    borderRadius: "20px",
  };
  const nameStyle = {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "20px",
    margin: "10px 0 30px",
  };
  const idStyle = {
    color: "#797d83",
    fontWeight: "400",
    fontSize: "15px",
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 275px)",
    gridTemplateRows: "275px 120px",
    gridGap: "20px",
    justifyContent: "center",
    alignContent: "center",
  };
  const imgContainerStyle = {
    width: "100%",
    height: "100%",
  };
  const imgStyle = {
    height: "90%",
    width: "90%",
    display: "block",
    margin: "auto",
  };
  const statsStyle = {
    display: "flex",
  };

  const statTileStyle = {
    color: "#ffffff",
    marginTop: "12px",
    padding: "3px 10px",
    border: "1px solid #000000",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#797d83",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const type = {
    backgroundColor: "#7575fa",
    padding: "10px 40px",
    margin: "5px",
    fontWeight: "900",
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };

  const { id } = useParams();
  const pokemonData = useLoaderData();

  return (
    <div style={tileStyle}>
      <p style={nameStyle}>
        {pokemonData.name}
        <span style={idStyle}> #0{pokemonData.id}</span>
      </p>
      <div style={gridStyle}>
        <div style={imgContainerStyle}>
          {pokemonData.sprites.other.dream_world.front_default === null ? (
            <img style={imgStyle} src={pokemonData.sprites.front_default} />
          ) : (
            <img
              style={imgStyle}
              src={pokemonData.sprites.other.dream_world.front_default}
            />
          )}
        </div>
        <div style={statsStyle}>
          <ul>
            {pokemonData.stats.map((stats) => (
              <li style={statTileStyle}>{stats.stat.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonData.stats.map((stats) => (
              <li style={statTileStyle}>{stats.base_stat}</li>
            ))}
          </ul>
        </div>
        <div className="Pokemon-detail__types">
          <p style={titleStyle}>Type</p>
          <div className="Pokemon-detail__types--multiple-type">
            <Stack direction="row" spacing={1}>
              {pokemonData.types.map((number) => (
                <Chip label={number.type.name} style={type} />
              ))}
            </Stack>
          </div>
        </div>
        <div className="Pokemon-detail__Weaknesses">
          <p style={titleStyle}>Weaknesses</p>
          <div className="Pokemon-detail__Weaknesses--multiple-type">
            Soon...
          </div>
        </div>
      </div>
    </div>
  );
}

// loader function
export const pokemonDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

  return res.json();
};
