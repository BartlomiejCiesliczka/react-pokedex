import { NavLink, Outlet } from "react-router-dom";

export function RootLayout(props) {
  return (
    <div className="root-layouts">
      <header>
        <nav>
          <h1>Pokedex</h1>
          <NavLink to="/">Search</NavLink>
          <NavLink to="list">List</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
