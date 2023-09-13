import { Searchbar } from "./Searchbar/Searchbar";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export function Navbar() {
  const rootLayoutNav = {
    /* backgroundColor: "#ff1f1f", */
    borderBottom: "2px solid black",
  };

  const navButton = {
    padding: "10px 0",
    width: "160px",
    color: "white",
    "&:focus": {
      /* color: "#FBD743", */
    },
  };
  return (
    <AppBar>
      <Toolbar style={rootLayoutNav}>
        <CatchingPokemonIcon
          fontSize="large"
          color="white"
          sx={{ pl: "150px" }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEDEX
        </Typography>
        <Searchbar />
        <Stack direction="row" spacing={2} sx={{ pr: "150px" }}>
          <NavLink to="/react-pokedex">
            <Button sx={navButton}>Home</Button>
          </NavLink>
          <NavLink to="pokedex">
            <Button sx={navButton}>Pokedex</Button>
          </NavLink>
          <NavLink to="type">
            <Button sx={navButton}>Types</Button>
          </NavLink>
          <a href="https://github.com/BartlomiejCiesliczka" target="_blank">
            <Button style={navButton} sx={{ pr: 280 }}>
              My Github
            </Button>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
