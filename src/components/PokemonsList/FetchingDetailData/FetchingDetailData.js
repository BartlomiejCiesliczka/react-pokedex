import { useState, useEffect } from "react";
import { Tile } from "../Tile/Tile";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export function FetchingDetailData({ pokemon }) {
  const [loading, setLoading] = useState();
  const [pokemonData, setPokemonData] = useState([]);
  const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  useEffect(() => {
    setLoading(false);
    fetch(PokeURL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setLoading(true);
      })
      .catch((error) => alert("fetch - error ", error));
  }, [pokemon]);

  return (
    <>
      {loading ? (
        pokemonData.id <= 1010 ? (
          <Link
            to={`/react-pokedex/pokedex/pokemon/` + pokemonData.id.toString()}
          >
            <Tile key={pokemonData.id} pokemonData={pokemonData} />
          </Link>
        ) : null
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
