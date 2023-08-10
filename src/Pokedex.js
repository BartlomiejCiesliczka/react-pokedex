import { ListLayout } from "./components/PokemonsList/ListLayout/ListLayout";
import { Header } from "./components/Header/Header";
import { SearchPokemon } from "./components/SearchPokemon/SearchPokemon";

import { useState } from "react";

export function Pokedex() {
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
