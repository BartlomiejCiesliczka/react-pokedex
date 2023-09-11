import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { PokemonTypeColors } from "../../../const/TypeColor";

export function Tile({ pokemonData }) {
  const imgContainer = {
    height: "270px",
    width: "270px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    background: PokemonTypeColors[pokemonData.types[0].type.name],
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
  const imgError = {
    textAlign: "center",
    padding: "85px 0",
  };

  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: "25px",
        "&:hover": {
          opacity: 0.85,
        },
      }}
    >
      <Box sx={imgContainer}>
        {pokemonData.sprites.other.dream_world.front_default ? (
          <img
            style={img}
            src={pokemonData.sprites.other.dream_world.front_default}
          />
        ) : pokemonData.sprites.front_default ? (
          <img style={img} src={pokemonData.sprites.front_default} />
        ) : (
          <div style={imgError}>Pic not found</div>
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
    </Paper>
  );
}
