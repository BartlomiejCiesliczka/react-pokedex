import { Outlet } from "react-router-dom";
import { Searchbar } from "../components/Navbar/Searchbar/Searchbar";

export function PokedexLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
