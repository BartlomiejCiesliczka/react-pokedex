import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { PokemonTypeColors } from "../const/TypeColor";

export function TypeList() {
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
            <Paper elevation={5}>
              <Button
                variant="outlined"
                sx={buttonStyle}
                style={{ background: PokemonTypeColors[type.name] }}
              >
                {type.name}
              </Button>
            </Paper>
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
