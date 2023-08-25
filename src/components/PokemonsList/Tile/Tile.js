import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function Tile({ pokemonData }) {
  const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  const tile = {
    /*     boxShadow: "0px 0px 10px 2px #FBD743", */
    cursor: "pointer",
    borderRadius: "25px",

    "&:hover": {
      opacity: 0.85,
    },
  };
  const imgContainer = {
    height: "270px",
    width: "270px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    background: POKEMON_TYPE_COLORS[pokemonData.types[0].type.name],
  };
  const img = {
    height: "70%",
    width: "70%",
  };
  const dataContainer = {
    backgroundColor: "#7b7b7b",
    border: "1px solid black",
    borderTop: "none",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
  };
  const name = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  };
  const ID = {
    fontSize: "14px",
    textAlign: "center",
    color: "white",
  };
  const stackType = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 0px 10px",
  };
  const type = {
    backgroundColor: "transparent",
    padding: "5px 10px",
    margin: "5px",
    fontWeight: "900",
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };
  const PNF = {
    textAlign: "center",
    padding: "85px 0",
  };
  /* {pokemonData.types[0].type.name} */

  return (
    <Box sx={tile}>
      <Box sx={imgContainer}>
        {pokemonData.sprites.other.dream_world.front_default ? (
          <img
            style={img}
            src={pokemonData.sprites.other.dream_world.front_default}
          />
        ) : pokemonData.sprites.front_default ? (
          <img style={img} src={pokemonData.sprites.front_default} />
        ) : (
          <div style={PNF}>Pic not found</div>
        )}
      </Box>
      <Box sx={dataContainer}>
        <p style={name}>{pokemonData.name}</p>
        <p style={ID}>#0{pokemonData.id}</p>
        <Stack direction="row" spacing={1} sx={stackType}>
          {pokemonData.types.map((number) => (
            <Chip label={number.type.name} style={type} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
