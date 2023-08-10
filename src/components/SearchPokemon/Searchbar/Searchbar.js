import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

export function Searchbar({
  searchNameOrID,
  setSearchNameOrID,
  searchPokemon,
}) {
  const SearchStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  };

  return (
    <div style={SearchStyle}>
      <Paper
        sx={{
          p: "4px 5px 4px 18px",
          borderRadius: "25px",
          boxShadow: "none",
          backgroundColor: "#ebebeb",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 0px 20px 5px #00ffff",
        }}
      >
        <InputBase
          placeholder="Search by name or number"
          variant="outlined"
          sx={{ width: "350px" }}
          value={searchNameOrID}
          onChange={(e) => setSearchNameOrID(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              searchNameOrID.length > 0 &&
              searchNameOrID != 0 &&
              searchNameOrID
            ) {
              searchPokemon();
            }
          }}
        />
        <IconButton
          type="button"
          onClick={() => {
            if (
              searchNameOrID.length > 0 &&
              searchNameOrID != 0 &&
              searchNameOrID
            ) {
              searchPokemon();
            }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
