import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokeName = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then((res) => res.data)
    .then((data) => data.results.map((p) => p.name));
};

export const usePokeNameData = () => {
  return useQuery(["PokemonListData"], fetchPokeName);
};
