import "./SearchPokemon.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Loading from "react-simple-loading";
import { PokemonDetailData } from "./PokemonDetail/PokemonDetailData";
import { Searchbar } from "./Searchbar/Searchbar";
import { PaginationNext } from "./PaginationNext/PaginationNext";
import { PaginationPrevious } from "./PaginationPrevious/PaginationPrevious";

export function SearchPokemon({}) {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchNameOrID, setSearchNameOrID] = useState("");
  const [buttonNameOrID, setButtonNameOrID] = useState("");
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFound, setisFound] = useState("");
  const [] = useState(false);
  const SearchAPI = `https://pokeapi.co/api/v2/pokemon/${searchNameOrID}`;
  const ButtonAPI = `https://pokeapi.co/api/v2/pokemon/${buttonNameOrID}`;

  const searchPokemon = async () => {
    try {
      setLoading(true);
      setExist(false);
      let res = await fetch(SearchAPI);
      let data = await res.json();
      setPokemonData(data);
      setisFound("");
      setLoading(false);
      setExist(true);
    } catch (error) {
      setisFound("Pokemon not found :/");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchNameOrID) {
      setLoading(true);
      setExist(false);
      fetch(ButtonAPI)
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data);
          setisFound("");
          setLoading(false);
          setExist(true);
        });
    }
  }, [buttonNameOrID]);

  return (
    <>
      <Searchbar
        searchNameOrID={searchNameOrID}
        setSearchNameOrID={setSearchNameOrID}
        searchPokemon={searchPokemon}
      />
      {loading ? (
        <Loading />
      ) : exist ? (
        <div className="Detail-flex">
          <PaginationPrevious
            setButtonNameOrID={setButtonNameOrID}
            pokemonData={pokemonData}
          />
          <PokemonDetailData
            key={pokemonData.id}
            pokemonData={pokemonData}
            setButtonNameOrID={setButtonNameOrID}
            buttonNameOrID={buttonNameOrID}
          />
          <PaginationNext
            setButtonNameOrID={setButtonNameOrID}
            pokemonData={pokemonData}
          />
        </div>
      ) : (
        isFound
      )}
    </>
  );
}
