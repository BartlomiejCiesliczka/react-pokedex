import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Searchbar() {
  const [pokemonNameOrID, setPokemonNameOrID] = useState();
  const navigate = useNavigate();

  function handleSearch() {
    if (pokemonNameOrID.trim().length !== 0) {
      navigate(`/react-pokedex/pokedex/pokemon/` + pokemonNameOrID.toString());
      setPokemonNameOrID("");
    }
  }

  return (
    <Paper
      sx={{
        p: "4px 5px 4px 18px",
        mr: "150px",
        borderRadius: "25px",
        boxShadow: "none",
        /*         backgroundColor: "#ebebeb", */
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        placeholder="Search Pokemon by name or number"
        variant="outlined"
        sx={{ width: "350px" }}
        value={pokemonNameOrID}
        onChange={(e) => setPokemonNameOrID(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && pokemonNameOrID.length > 0) {
            handleSearch();
          }
        }}
      />
      <IconButton type="button" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
