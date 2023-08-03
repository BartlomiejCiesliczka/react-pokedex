import "./App.css";
import { ListLayout } from "./components/PokemonsList/ListLayout/ListLayout";
import { Header } from "./components/Header/Header";
import { SearchPokemon } from "./components/SearchPokemon/SearchPokemon";
import { useState } from "react";

function App() {
  const [pokemonType, setPokemonType] = useState(``);

  return (
    <main>
      <Header setPokemonType={setPokemonType} />
      <div className="pokedex">
        <h1 className="pokedex__title">POKEDEX</h1>
        <SearchPokemon />
        <ListLayout pokemonType={pokemonType} />
      </div>
    </main>
  );
}

export default App;
