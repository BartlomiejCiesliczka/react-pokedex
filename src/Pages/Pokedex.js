import { ListLayout } from "../components/PokemonsList/ListLayout/ListLayout";

export function Pokedex({ pokemonType }) {
  return (
    <>
      <ListLayout pokemonType={pokemonType} />
    </>
  );
}
