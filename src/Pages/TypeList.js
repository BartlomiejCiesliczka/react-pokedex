import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useParams, useLoaderData } from "react-router-dom";

export function TypeList() {
  const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };
  const ListLayout = {
    paddingTop: "90px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    rowGap: "70px",
    columnGap: "70px",
  };
  const buttonStyle = {
    width: "200px",
    height: "50px",
    color: "#000000",
    border: "1px solid",
    "&:hover": {
      opacity: 0.85,
      border: "1px solid black",
    },
  };

  const types = useLoaderData();

  return (
    <div style={ListLayout}>
      {types.results.map((type) =>
        type.name === "unknown" || type.name === "shadow" ? null : (
          <Link to={type.name.toString()}>
            <Button
              variant="outlined"
              sx={buttonStyle}
              style={{ background: POKEMON_TYPE_COLORS[type.name] }}
            >
              {type.name}
            </Button>
          </Link>
        ),
      )}
    </div>
  );
}

// loader function
export const TypesLoader = async ({ params }) => {
  const res = await fetch("https://pokeapi.co/api/v2/type/");

  return res.json();
};
