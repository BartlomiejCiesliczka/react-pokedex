import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export function Home() {
  return (
    <Box sx={{ width: "100%", maxWidth: 1000, my: 10 }}>
      <Typography variant="h3" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="h6" gutterBottom>
        I created Pokedex for every Pokemon lover :D
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        In the "Pokedex" section, you will find a list of all available Pokemon.
        After clicking on the tile or searching using the Searchbar specific
        Pokemon, you will see data of the selected creature. The "Types" section
        is a list, when clicked in the selected item you will see a list with
        pokemons of that type. To get the Pokemons data it was used the PokéAPI.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The main goal with this project was to learn React and library like MUI,
        Router, Redux, Query etc.
      </Typography>
    </Box>
  );
}
