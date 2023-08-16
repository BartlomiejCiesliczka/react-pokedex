import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  const rootLayoutNav = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    backgroundColor: "#ffff",
    height: "60px",
    width: "100vw",
    position: "absolute",
  };

  const navTitle = {
    margin: "0 auto 0 280px",
    alignSelf: "center",
  };
  const creditsStyle = {
    fontSize: "12px",
    color: "#acacac",
  };

  const navButton = {
    padding: "10px 0",
    width: "160px",
    height: "100%",
  };

  return (
    <>
      <nav style={rootLayoutNav}>
        <h1 style={navTitle}>
          POKEDEX
          <span style={creditsStyle}> By Bartłomiej Cieśliczka</span>
        </h1>

        <NavLink to="/react-pokedex">
          <Button style={navButton}>Home</Button>
        </NavLink>
        <NavLink to="pokedex">
          <Button style={navButton}>Pokedex</Button>
        </NavLink>
        <NavLink to="type">
          <Button style={navButton}>Types</Button>
        </NavLink>
        <a href="https://github.com/BartlomiejCiesliczka" target="_blank">
          <Button style={navButton} sx={{ pr: 280 }}>
            My Github
          </Button>
        </a>
      </nav>

      <main>
        <div className="pokedex">
          <Outlet />
        </div>
      </main>
    </>
  );
}
