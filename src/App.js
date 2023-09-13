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
import {
  PokemonDetail,
  pokemonDetailLoader,
} from "./components/PokemonDetail/PokemonDetail";
import { Pokedex } from "./Pages/Pokedex";
import { TypesLayout } from "./Layouts/TypesLayout";
import { TypeList, TypesLoader } from "./Pages/TypeList";
import { TypeData, TypeDataLoader } from "./components/TypeData/TypeData";
import { PokemonLayout } from "./Layouts/PokemonLayout";
import { PaginationLayout } from "./Layouts/PaginationLayout";
import {
  ListLoader,
  ListPage,
} from "./components/PokemonsList/ListPage/ListPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//dark theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState, createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  //dark-light theme MUI
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#fafafa",
              paper: "#ffffff",
            },
            text: {
              primary: "#111517",
            },
          }
        : {
            background: {
              default: "#333e48",
              paper: "#2b3945",
            },
            text: {
              primary: "#ffffff",
            },
          }),
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

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
            <Route path=":number" element={<ListPage />} loader={ListLoader} />
          </Route>
        </Route>
        <Route path="type" element={<TypesLayout />}>
          <Route index element={<TypeList />} loader={TypesLoader} />
          <Route path=":type" element={<TypeData />} loader={TypeDataLoader} />
        </Route>
      </Route>,
    ),
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
