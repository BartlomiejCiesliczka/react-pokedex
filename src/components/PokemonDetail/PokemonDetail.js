import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useParams, useLoaderData } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, YAxis, XAxis, Tooltip } from "recharts";

export function PokemonDetail() {
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
  const imgContainerStyle = {
    height: "400px",
    width: "400px",
  };
  const imgStyle = {
    height: "100%",
    width: "100%",
    display: "block",
    alignItem: "start",
  };
  const basicInfoContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "80px",
  };

  const { id } = useParams();
  const pokemon = useLoaderData();

  const { data: species, isLoading } = useQuery(["species", id], () => {
    return Axios.get(pokemon.species.url).then((res) => res.data);
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

    return [`Male: ` + male + `%, `, `Female: ` + female + `%`];
  };
  const dataset = [];
  const pushDataset = () => {
    pokemon.stats.map((stat) => {
      dataset.push({
        name: stat.stat.name,
        value: stat.base_stat,
      });
    });
  };
  pushDataset();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <p style={nameStyle}>
        {pokemon.name}
        <span style={idStyle}> #0{pokemon.id}</span>
      </p>
      <div style={basicInfoContainer}>
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
            marginTop: "40px",
          }}
        >
          <div>
            {species.flavor_text_entries
              .filter(
                (title) =>
                  title.version.name === "white" &&
                  title.language.name === "en",
              )
              .map((filteredTitle) => (
                <Typography variant="subtitle1" sx={{}}>
                  {filteredTitle.flavor_text.replace(
                    /[^a-zA-Z0-9&\/\\#,+()$~%.'":*?<>{}é `]/g,
                    " ",
                  )}
                </Typography>
              ))}
          </div>
          <div
            style={{
              marginTop: "30px",
              height: "250px",
              backgroundColor: "#30a7d7",
              borderRadius: "25px",
              display: "flex",
            }}
          >
            <ul style={{ marginTop: "20px", width: "200px" }}>
              <li>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Height:
                </Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {heightInMeters(pokemon.height)}m
                </Typography>
              </li>
              <li>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Weight:
                </Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {weightInKilograms(pokemon.weight)}kg
                </Typography>
              </li>
              <li>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Gender:
                </Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {genderRate(species.gender_rate)}{" "}
                </Typography>
              </li>
            </ul>
            <ul style={{ marginTop: "20px" }}>
              <li>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Abilities:
                </Typography>
                {pokemon.abilities.map((ability) => (
                  <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                    {ability.ability.name}
                  </Typography>
                ))}
              </li>
              <li>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Types:
                </Typography>
                {pokemon.types.map((number) => (
                  <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                    {number.type.name}
                  </Typography>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ margin: "100px 0px" }}>
        <BarChart
          width={1000}
          height={400}
          data={dataset}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={100}
        >
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#30a7d7" />
        </BarChart>
      </div>
      <div>{/* evo-chain soon*/}</div>
      <div>{/* damage soon */}</div>
    </>
  );
}

// loader function
export const pokemonDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id);

  return res.json();
};
