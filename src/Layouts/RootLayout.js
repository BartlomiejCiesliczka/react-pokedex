import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

const pokedex = {
  margin: "0 auto",
  height: "100vh",
  width: "1500px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  borderLeft: "2px solid black",
  borderRight: "2px solid black",
  backgroundColor: "background.main",
  overflowY: "scroll",
  paddingTop: "60px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Box /* className="pokedex" */ sx={pokedex}>
        <Outlet />
      </Box>
    </>
  );
}
