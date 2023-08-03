import { useEffect, useState } from "react";
import { FetchingDetailData } from "../FetchingDetailData/FetchingDetailData";
import { Pagination } from "../Pagination/Pagination";
import "./ListLayout.css";

export function ListLayout({ pokemonType }) {
  const [allPokemonAPI, setAllPokemonAPI] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`,
  );

  const [pokeName, setPokeName] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);

  const pokemonTypeAPI = `https://pokeapi.co/api/v2/type/${pokemonType}`;

  useEffect(() => {
    if (!pokemonType) {
      setLoading(true);
      fetch(allPokemonAPI)
        .then((response) => response.json())
        .then((data) => {
          setNextPage(data.next);
          setPrevPage(data.previous);
          setPokeName(data.results.map((p) => p.name));
          setLoading(false);
        })
        .catch((error) => alert("ListLayout.js - Data loading error", error));
    }
  }, [allPokemonAPI, pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      setLoading(true);
      fetch(pokemonTypeAPI)
        .then((response) => response.json())
        .then((data) => {
          setPokeName(data.pokemon.map((p) => p.pokemon.name));
          setLoading(false);
        })
        .catch((error) => alert("ListLayout.js - Data loading error", error));
    }
  }, [pokemonType]);

  console.log(pokeName);

  return (
    <>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        setAllPokemonAPI={setAllPokemonAPI}
      />
      <div className="pokemons-list-layout">
        {pokeName.map((name) => (
          <FetchingDetailData pokemon={name} />
        ))}
      </div>
    </>
  );
}
