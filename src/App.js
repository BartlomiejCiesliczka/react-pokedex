import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PokedexLayout } from "./Layouts/PokedexLayout";
import { Home } from "./Pages/Home";
import { RootLayout } from "./Layouts/RootLayout";
import { PokemonDetail, pokemonDetailLoader } from "./PokemonDetail";
import { Pokedex } from "./Pages/Pokedex";
import { TypesLayout } from "./Layouts/TypesLayout";
import { TypeList, TypesLoader } from "./TypeList";
import { TypeData, TypeDataLoader } from "./TypeData";
import { PokemonLayout } from "./Layouts/PokemonLayout";
import { PaginationLayout } from "./Layouts/PaginationLayout";
import { ListLoader, PageSelect } from "./PageSelect";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="react-pokedex" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<PokedexLayout />}>
          <Route index element={<Pokedex />} />
          <Route path="pokemon" element={<PokemonLayout />}>
            <Route
              path=":id"
              element={<PokemonDetail />}
              loader={pokemonDetailLoader}
            />
          </Route>
          <Route path="list" element={<PaginationLayout />}>
            <Route
              path=":number"
              element={<PageSelect />}
              loader={ListLoader}
            />
          </Route>
        </Route>
        <Route path="type" element={<TypesLayout />}>
          <Route index element={<TypeList />} loader={TypesLoader} />
          <Route path=":type" element={<TypeData />} loader={TypeDataLoader} />
        </Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
