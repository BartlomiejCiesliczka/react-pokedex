import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pokedex">
          <Outlet />
        </div>
      </main>
    </>
  );
}
