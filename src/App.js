import "./App.css";
import { Searchbar } from "./components/SearchPokemon/Searchbar/Searchbar";
import { ListLayout } from "./components/PokemonsList/ListLayout/ListLayout";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header />
      <div className="pokedex">
        <h1 className="pokedex__title">POKEDEX</h1>
        <Searchbar />
        <ListLayout />
      </div>
    </main>
  );
}

export default App;
