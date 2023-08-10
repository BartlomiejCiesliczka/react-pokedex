import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Pokedex } from "./Pokedex";
import { Home } from "./Home";
import { RootLayout } from "./RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
