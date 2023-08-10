import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import { useState } from "react";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { List } from "./pages/List";

function App() {
  const [pokemonType, setPokemonType] = useState(``);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
