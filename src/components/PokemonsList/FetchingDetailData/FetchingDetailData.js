import { useState, useEffect } from "react";
import { Tile } from "../Tile/Tile";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPokemonData = (pokemon) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.data);
};

export function FetchingDetailData({ pokemon }) {
  const {
    data: pokemonData,
    isLoading,
    isError,
    error,
  } = useQuery(["pokemonDetailData", pokemon], () => fetchPokemonData(pokemon));

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : pokemonData?.id <= 1010 ? (
        <Link
          to={`/react-pokedex/pokedex/pokemon/` + pokemonData.id.toString()}
        >
          <Tile key={pokemonData.id} pokemonData={pokemonData} />
        </Link>
      ) : null}
    </>
  );
}
