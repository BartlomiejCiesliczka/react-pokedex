import { Outlet } from "react-router-dom";
import { Searchbar } from "../components/Searchbar/Searchbar";

export function PokedexLayout() {
  return (
    <>
      <Searchbar />
      <Outlet />
    </>
  );
}
