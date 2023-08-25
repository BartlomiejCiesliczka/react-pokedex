import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useParams, useLoaderData } from "react-router-dom";

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
    boxShadow: "0px 0px 10px 2px #FBD743",
    color: "#000000",
    border: "1px solid",
    "&:hover": {
      boxShadow: "0px 0px 20px 5px #FF1F1F",
      border: "1px solid black",
    },
  };

  const types = useLoaderData();

  return (
    <div style={ListLayout}>
      {types.results.map((type) =>
        type.name === "unknown" || type.name === "shadow" ? null : (
          <Link to={type.name.toString()}>
            <Button variant="outlined" sx={buttonStyle}>
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
