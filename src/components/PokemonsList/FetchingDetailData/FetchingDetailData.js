import { useState, useEffect } from "react";
import Loading from "react-simple-loading";
import { Tile } from "../Tile/Tile";

export function FetchingDetailData({ pokemon }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  useEffect(() => {
    setLoading(true);
    fetch(PokeURL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setLoading(false);
      })
      .catch((error) => alert("fetch - error ", error));
  }, [pokemon]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Tile key={pokemonData.id} pokemonData={pokemonData} />
      )}
    </>
  );
}
