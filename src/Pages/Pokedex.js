import { ListLayout } from "../components/PokemonsList/ListLayout/ListLayout";
import { Searchbar } from "../components/Searchbar/Searchbar";

export function Pokedex({ pokemonType }) {
  return (
    <>
      <ListLayout pokemonType={pokemonType} />
    </>
  );
}
