import { Searchbar } from "./Searchbar/Searchbar";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CatchingPokemonOutlinedIcon from "@mui/icons-material/CatchingPokemonOutlined";
import { ColorModeContext } from "../../App";
import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
export function Navbar() {
  const { colorMode, theme } = useContext(ColorModeContext);

  const rootLayoutNav = {
    borderBottom: "2px solid black",
  };

  const navButton = {
    padding: "10px 0",
    width: "160px",
    color: "white",
  };
  return (
    <AppBar sx={{ backgroundColor: "background.appbar" }}>
      <Toolbar style={rootLayoutNav}>
        <CatchingPokemonOutlinedIcon
          fontSize="large"
          color="white"
          sx={{ ml: "150px" }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEDEX
        </Typography>
        <Searchbar />
        <Stack direction="row" spacing={2} sx={{ pr: "50px" }}>
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
            <Button style={navButton}>My Github</Button>
          </a>
        </Stack>
        <Button
          sx={{ p: 0 }}
          disableFocusRipple="true"
          startIcon={
            theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )
          }
          color="inherit"
          onClick={colorMode.toggleColorMode}
        ></Button>
      </Toolbar>
    </AppBar>
  );
}
