import { useParams, useLoaderData } from "react-router-dom";
import { FetchingDetailData } from "./components/PokemonsList/FetchingDetailData/FetchingDetailData";

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
  const damageLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "30px",
    columnGap: "500px",
  };

  return (
    <>
      <div style={ListLayout}>
        {typeData.pokemon
          .map((data) => data.pokemon.name)
          .map((name) => (
            <FetchingDetailData key={name} pokemon={name} />
          ))}
      </div>
    </>
  );
}

// loader function
export const TypeDataLoader = async ({ params }) => {
  const { type } = params;

  const res = await fetch("https://pokeapi.co/api/v2/type/" + type);

  return res.json();
};
