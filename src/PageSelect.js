import { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FetchingDetailData } from "./components/PokemonsList/FetchingDetailData/FetchingDetailData";
import { Pagination } from "@mui/material";

export function PageSelect() {
  const ListLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "40px",
    marginBottom: "40px",
  };
  const PaginationStyle = {
    marginBottom: "30px",
  };
  let { number } = useParams();
  const Data = useLoaderData();
  const navigate = useNavigate();
  const [page, setPage] = useState(number);

  const [pokeName, setPokeName] = useState([]);
  useEffect(() => {
    setPokeName(Data.results.map((p) => p.name));
    console.log(number);
  }, [number]);

  const handleChange = (e, p) => {
    navigate(`/react-pokedex/pokedex/list/` + p.toString());
  };

  return (
    <>
      <Pagination
        shape="rounded"
        defaultPage={6}
        siblingCount={2}
        count={51}
        onChange={handleChange}
        sx={PaginationStyle}
      ></Pagination>
      <div style={ListLayout}>
        {pokeName.map((name) => (
          <FetchingDetailData key={name} pokemon={name} />
        ))}
      </div>
    </>
  );
}

// loader function
export const ListLoader = async ({ params }) => {
  const { number } = params;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${number * 20 - 20}&limit=20`,
  );

  return res.json();
};
