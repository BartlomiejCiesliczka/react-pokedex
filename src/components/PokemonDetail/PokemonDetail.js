import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { useParams, useLoaderData } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, YAxis, XAxis, Tooltip } from "recharts";
import {
  genderRate,
  heightInMeters,
  weightInKilograms,
} from "../../const/DetailConversionFactor";

const imgStyle = {
  height: "100%",
  width: "100%",
  display: "block",
  alignItem: "start",
};

export function PokemonDetail() {
  const { id } = useParams();
  const pokemon = useLoaderData();

  const { data: species, isLoading } = useQuery(["species", id], () => {
    return Axios.get(pokemon.species.url).then((res) => res.data);
  });

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
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textTransform: "capitalize",
          m: "20px 0 30px",
        }}
      >
        {pokemon.name}
        <Box
          component="span"
          sx={{ color: "#797d83", fontWeight: "400", fontSize: "20px" }}
        >
          #0{pokemon.id}
        </Box>
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Box sx={{ height: "400px", width: "400px" }}>
          {pokemon.sprites.other.dream_world.front_default === null ? (
            <img style={imgStyle} src={pokemon.sprites.front_default} />
          ) : (
            <img
              style={imgStyle}
              src={pokemon.sprites.other.dream_world.front_default}
            />
          )}
        </Box>
        <Box
          sx={{
            width: "500px",
            marginTop: "40px",
          }}
        >
          <Box>
            {species.flavor_text_entries
              .filter(
                (title) =>
                  title.version.name === "white" &&
                  title.language.name === "en",
              )
              .map((filteredTitle) => (
                <Typography variant="subtitle1">
                  {filteredTitle.flavor_text.replace(
                    /[^a-zA-Z0-9&\/\\#,+()$~%.'":*?<>{}é `]/g,
                    " ",
                  )}
                </Typography>
              ))}
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              height: "250px",
              backgroundColor: "background.default",
              borderRadius: "25px",
              display: "flex",
            }}
          >
            <ul style={{ marginTop: "20px", width: "200px" }}>
              <li>
                <Typography variant="h6">Height:</Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {heightInMeters(pokemon.height)}m
                </Typography>
              </li>
              <li>
                <Typography variant="h6">Weight:</Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {weightInKilograms(pokemon.weight)}kg
                </Typography>
              </li>
              <li>
                <Typography variant="h6">Gender:</Typography>
                <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                  {genderRate(species.gender_rate)}{" "}
                </Typography>
              </li>
            </ul>
            <ul style={{ marginTop: "20px" }}>
              <li>
                <Typography variant="h6">Abilities:</Typography>
                {pokemon.abilities.map((ability) => (
                  <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                    {ability.ability.name}
                  </Typography>
                ))}
              </li>
              <li>
                <Typography variant="h6">Types:</Typography>
                {pokemon.types.map((number) => (
                  <Typography variant="subtitle1" sx={{ paddingLeft: "5px" }}>
                    {number.type.name}
                  </Typography>
                ))}
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: "100px 0px" }}>
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
          <Bar dataKey="value" fill="#8f8f8f" />
        </BarChart>
      </Box>
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
