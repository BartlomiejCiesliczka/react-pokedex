import { useParams, useLoaderData } from "react-router-dom";

export function Type() {
  const { type } = useParams();
  const typeData = useLoaderData();

  return (
    <div>
      <div>{type}</div>
    </div>
  );
}

// loader function
export const pokemonTypeLoader = async ({ params }) => {
  const { type } = params;

  const res = await fetch("https://pokeapi.co/api/v2/type/" + type);

  return res.json();
};
