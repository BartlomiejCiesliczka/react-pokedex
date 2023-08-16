import { ListLayout } from "../components/PokemonsList/ListLayout/ListLayout";
import { Searchbar } from "../components/SearchPokemon/Searchbar/Searchbar";

export function Pokedex({ pokemonType }) {
  return (
    <>
      <Searchbar />
      <ListLayout pokemonType={pokemonType} />
    </>
  );
}
