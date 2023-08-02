import { useEffect, useState } from "react";
import { FetchingDetailData } from "../FetchingDetailData/FetchingDetailData";
import { Pagination } from "../Pagination/Pagination";
import { ShowButton } from "../ShowButton/ShowButton";
import "./ListLayout.css";

export function ListLayout() {
  const [APIUrl, setAPIUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`,
  );
  const [pokeName, setPokeName] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPokemonList, setShowPokemonList] = useState(false);

  const getPokemons = async () => {
    try {
      setLoading(true);
      let res = await fetch(APIUrl);
      let data = await res.json();
      setNextPage(data.next);
      setPrevPage(data.previous);
      setPokeName(data.results.map((p) => p.name));
      setLoading(false);
    } catch (error) {
      alert("ListLayout.js - Data loading error", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [APIUrl]);

  return (
    <>
      <ShowButton
        showPokemonList={showPokemonList}
        setShowPokemonList={setShowPokemonList}
      />
      {showPokemonList ? (
        <>
          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            setAPIUrl={setAPIUrl}
          />
          <div className="pokemons-list-layout">
            {pokeName.map((name) => (
              <FetchingDetailData pokemon={name} />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
