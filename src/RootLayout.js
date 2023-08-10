import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  const rootLayoutNav = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    backgroundColor: "#ffff",
    padding: "0 280px",
    height: "60px",
  };

  const navTitle = {
    marginRight: "auto",
    alignSelf: "center",
  };

  const navButton = {
    padding: "10px 0",
    width: "160px",
    height: "100%",
  };

  return (
    <>
      <nav style={rootLayoutNav}>
        <h1 style={navTitle}>Pokedex</h1>

        <NavLink to="/">
          <Button style={navButton}>Home</Button>
        </NavLink>
        <NavLink to="pokedex">
          <Button style={navButton}>Pokedex</Button>
        </NavLink>
        <a href="https://github.com/BartlomiejCiesliczka" target="_blank">
          <Button style={navButton}>My Github</Button>
        </a>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
