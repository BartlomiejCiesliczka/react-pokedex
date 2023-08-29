import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useParams, useLoaderData } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function PokemonDetail() {
  /*   const tileStyle = {
    marginTop: "80px",
    width: "650px",
    height: "500px",
    border: "2px solid #000000",
    borderRadius: "20px",
  }; */
  const nameStyle = {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "50px",
    margin: "20px 0 30px",
  };
  const idStyle = {
    color: "#797d83",
    fontWeight: "400",
    fontSize: "20px",
  };
  /*   const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 275px)",
    gridTemplateRows: "275px 120px",
    gridGap: "20px",
    justifyContent: "center",
    alignContent: "center",
  }; */
  const imgContainerStyle = {
    height: "400px",
    width: "400px",
    /* marginLeft: "100px", */
  };
  const imgStyle = {
    height: "100%",
    width: "100%",
    display: "block",
    alignItem: "start",
  };
  const statsStyle = {
    display: "flex",
  };
  const statTileStyle = {
    color: "#ffffff",
    marginTop: "12px",
    padding: "3px 10px",
    border: "1px solid #000000",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#797d83",
  };
  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const type = {
    backgroundColor: "#7575fa",
    padding: "10px 40px",
    margin: "5px",
    fontWeight: "900",
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };
  const aaa = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "80px",
  };

  const { id } = useParams();
  const pokemon = useLoaderData();

  const { data: species, isLoading } = useQuery(["species"], () => {
    return Axios.get(
      /* pokemon.species.url */ `https://pokeapi.co/api/v2/pokemon-species/` +
        id,
    ).then((res) => res.data);
  });

  const heightInMeters = (value) => {
    return (value / 10).toFixed(2);
  };

  const weightInKilograms = (value) => {
    return (value / 10).toFixed(2);
  };

  const genderRate = (value) => {
    if (value === -1) {
      return "genderless";
    }
    const female = (value / 8) * 100;
    const male = 100 - female;

    return [`Male: ` + male + `%`, `Female: ` + female + `%`];
  };

  const chartSetting = {
    xAxis: [],
    width: 500,
    height: 400,
  };

  const dataset = [
    {
      name: pokemon.stats.map((stats) => stats.stat.name),
    },
  ];

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  return (
    <>
      <p style={nameStyle}>
        {pokemon.name}
        <span style={idStyle}> #0{pokemon.id}</span>
      </p>
      <div /* zdjęcie, opis, type */ style={aaa}>
        <div style={imgContainerStyle}>
          {pokemon.sprites.other.dream_world.front_default === null ? (
            <img style={imgStyle} src={pokemon.sprites.front_default} />
          ) : (
            <img
              style={imgStyle}
              src={pokemon.sprites.other.dream_world.front_default}
            />
          )}
        </div>
        <div
          style={{
            width: "500px",
            marginTop: "40px" /* display: "grid", alignItems: "center" */,
          }}
        >
          {/* konteren na opis i typ */}
          <div>
            {species.flavor_text_entries
              .filter(
                (title) =>
                  title.version.name === "white" &&
                  title.language.name === "en",
              )
              .map((filteredTitle) =>
                filteredTitle.flavor_text.replace(
                  /[^a-zA-Z0-9&\/\\#,+()$~%.'":*?<>{}é `]/g,
                  " ",
                ),
              )}
          </div>
          <div
            style={{
              marginTop: "30px",
              height: "250px",
              backgroundColor: "red",
              borderRadius: "25px",
            }}
          >
            <p>Height:</p>
            <p>{heightInMeters(pokemon.height)}m</p>

            <p>Weight</p>
            <p>{weightInKilograms(pokemon.weight)}kg</p>

            <p>Gender</p>
            <p>{genderRate(species.gender_rate)} </p>
          </div>
        </div>
      </div>
      <div>{/* statystyki */}</div>
      <div>{/* evo-chain */}</div>
      <div>{/* komu zadaje jakie dmg */}</div>
    </>

    /* <div style={tileStyle}>
      <p style={nameStyle}>
        {pokemon.name}
        <span style={idStyle}> #0{pokemon.id}</span>
      </p>
      <div style={gridStyle}>
        <div style={imgContainerStyle}>
          {pokemon.sprites.other.dream_world.front_default === null ? (
            <img style={imgStyle} src={pokemon.sprites.front_default} />
          ) : (
            <img
              style={imgStyle}
              src={pokemon.sprites.other.dream_world.front_default}
            />
          )}
        </div>
        <div style={statsStyle}>
          <ul>
            {pokemon.stats.map((stats) => (
              <li style={statTileStyle}>{stats.stat.name}</li>
            ))}
          </ul>
          <ul>
            {pokemon.stats.map((stats) => (
              <li style={statTileStyle}>{stats.base_stat}</li>
            ))}
          </ul>
        </div>
        <div className="Pokemon-detail__types">
          <p style={titleStyle}>Type</p>
          <div className="Pokemon-detail__types--multiple-type">
            <Stack direction="row" spacing={1}>
              {pokemon.types.map((number) => (
                <Chip label={number.type.name} style={type} />
              ))}
            </Stack>
          </div>
        </div>
        <div className="Pokemon-detail__Weaknesses">
          <p style={titleStyle}>Weaknesses</p>
          <div className="Pokemon-detail__Weaknesses--multiple-type">
            Soon...
          </div>
        </div>
      </div>
    </div> */
  );
}

// loader function
export const pokemonDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id);

  return res.json();
};
