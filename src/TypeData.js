import { useParams, useLoaderData } from "react-router-dom";
import { FetchingDetailData } from "./components/PokemonsList/FetchingDetailData/FetchingDetailData";

export function TypeData() {
  const { type } = useParams();
  const typeData = useLoaderData();

  const ListLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "40px",
  };
  const damageLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "30px",
    columnGap: "500px",
  };

  return (
    <>
      <h1>{type}</h1>
      <div style={damageLayout}>
        <ul>
          <p>strong at:</p>
          {typeData.damage_relations.double_damage_to
            .map((data) => data.name)
            .map((goodAt) => (
              <li>{goodAt}</li>
            ))}
        </ul>

        <ul>
          <p>weak at:</p>
          {typeData.damage_relations.double_damage_from
            .map((data) => data.name)
            .map((badAt) => (
              <li>{badAt}</li>
            ))}
        </ul>
      </div>
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
