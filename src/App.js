import "./App.css";
import { Searchbar } from "./components/SearchPokemon/Searchbar/Searchbar";
import { ListLayout } from "./components/PokemonsList/ListLayout/ListLayout";

function App() {
  return (
    <main>
      <div className="pokedex">
        <h1 className="pokedex__title">POKEDEX</h1>
        <Searchbar />
        <ListLayout />
      </div>
    </main>
  );
}

export default App;
