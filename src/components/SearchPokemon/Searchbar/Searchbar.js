import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Searchbar() {
  const SearchStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  };

  const [pokemonNameOrID, setPokemonNameOrID] = useState();
  const navigate = useNavigate();

  function handleSearch() {
    if (pokemonNameOrID.trim().length !== 0) {
      navigate(pokemonNameOrID.toString());
    }
  }

  return (
    <div style={SearchStyle}>
      <Paper
        sx={{
          marginTop: "60px",
          p: "4px 5px 4px 18px",
          borderRadius: "25px",
          boxShadow: "none",
          backgroundColor: "#ebebeb",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          placeholder="Search by name or number"
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
    </div>
  );
}
