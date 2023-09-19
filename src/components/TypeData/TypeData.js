import { Box } from "@mui/material";
import { useParams, useLoaderData } from "react-router-dom";
import { FetchingDetailData } from "../PokemonsList/FetchingDetailData/FetchingDetailData";

export function TypeData() {
  const { type } = useParams();
  const typeData = useLoaderData();

  const ListLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "40px",
    marginBottom: "40px",
    marginTop: "60px",
  };

  return (
    <>
      <Box sx={ListLayout}>
        {typeData.pokemon
          .map((data) => data.pokemon.name)
          .map((name) => (
            <FetchingDetailData key={name} pokemon={name} />
          ))}
      </Box>
    </>
  );
}

// loader function
export const TypeDataLoader = async ({ params }) => {
  const { type } = params;

  const res = await fetch("https://pokeapi.co/api/v2/type/" + type);

  return res.json();
};
