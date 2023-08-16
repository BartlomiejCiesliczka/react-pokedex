import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function Tile({ pokemonData }) {
  const tile = {
    boxShadow: "0px 0px 20px 5px #00ffff",
    cursor: "pointer",
    borderRadius: "25px",
    "&:hover": {
      boxShadow: "0px 0px 20px 5px #b103fc",
    },
  };
  const imgContainer = {
    height: "270px",
    width: "270px",
    border: "1px solid",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b8b8b8",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
  };
  const img = {
    height: "70%",
    width: "70%",
  };
  const dataContainer = {
    backgroundColor: "#7b7b7b",
    border: "1px solid",
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
          <div style={{ textAlign: "center", padding: "85px 0" }}>
            Pic not found
          </div>
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
