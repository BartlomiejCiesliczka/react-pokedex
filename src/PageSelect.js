import { useState, useEffect } from "react";
import {
  useParams,
  useLoaderData,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Pagination } from "@mui/material";
import { FetchingDetailData } from "./components/PokemonsList/FetchingDetailData/FetchingDetailData";
import Loading from "react-simple-loading";

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
  const { number } = useParams();
  const Data = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const [pokeName, setPokeName] = useState([]);

  useEffect(() => {
    setPokeName(Data.results.map((p) => p.name));
    console.log(number);
  }, [number]);

  const handleChange = (e, p) => {
    navigate(`/react-pokedex/pokedex/list/` + p.toString());
  };

  let currentLink = [];
  const crumbs = location.pathname.split("/").map((crumb) => {
    currentLink.push(crumb);
  });
  let pageNumber = currentLink[currentLink.length - 1];

  return (
    <>
      <Pagination
        shape="rounded"
        defaultPage={Number(pageNumber)}
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
