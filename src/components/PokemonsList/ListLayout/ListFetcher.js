import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FetchingDetailData } from "../FetchingDetailData/FetchingDetailData";
import CircularProgress from "@mui/material/CircularProgress";
import { usePokeNameData } from "../../../hooks/QueryHooks/usePokeNameData";

//style
const aaa = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "40px",
  marginBottom: "40px",
  marginTop: "60px",
};
const PaginationStyle = {
  marginBottom: "30px",
};

export function ListFetcher({}) {
  //useNavigation hook
  const navigate = useNavigate();

  //pagination function
  const handleChange = (e, p) => {
    navigate(`/react-pokedex/pokedex/list/` + p.toString());
  };

  const { data: pokeName, isLoading, isError, error } = usePokeNameData();

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div style={aaa}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          pokeName.map((name) => (
            <FetchingDetailData key={name} pokemon={name} />
          ))
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
