import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchingDetailData } from "../FetchingDetailData/FetchingDetailData";
import CircularProgress from "@mui/material/CircularProgress";

export function ListLayout({}) {
  //style
  const ListLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "40px",
    marginBottom: "40px",
    marginTop: "60px",
  };
  const PaginationStyle = {
    marginBottom: "30px",
  };

  //useState hooks
  const [pokeName, setPokeName] = useState([]);
  const [loading, setLoading] = useState();

  //Pokemon Data API
  const pokemonAPI = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;

  //useNavigation hook
  const navigate = useNavigate();

  //function
  const handleChange = (e, p) => {
    navigate(`/react-pokedex/pokedex/list/` + p.toString());
  };

  //useEffect hooks
  useEffect(() => {
    setLoading(false);
    fetch(pokemonAPI)
      .then((response) => response.json())
      .then((data) => {
        setPokeName(data.results.map((p) => p.name));
        setLoading(true);
      })
      .catch((error) => alert("ListLayout.js - Data loading error", error));
  }, []);

  return (
    <>
      <div style={ListLayout}>
        {loading ? (
          pokeName.map((name) => (
            <FetchingDetailData key={name} pokemon={name} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      <Pagination
        shape="rounded"
        siblingCount={2}
        count={51}
        onChange={handleChange}
        sx={PaginationStyle}
      ></Pagination>
    </>
  );
}
