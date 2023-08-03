import Button from "@mui/material/Button";
import "./Header.css";

export function Header({ setPokemonType }) {
  const buttonStyle = {
    height: "100%",
    width: "180px",
  };
  return (
    <header>
      <div className="header__img">
        <img src="" />
      </div>
      <div className="header__button">
        <Button
          style={buttonStyle}
          variant="text"
          sx={{
            color: "#ff4924",
          }}
          onClick={() => {
            setPokemonType("fire");
          }}
        >
          Fire
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#0051ba",
          }}
          onClick={() => {
            setPokemonType("water");
          }}
        >
          Water
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#00ba1c",
          }}
          onClick={() => {
            setPokemonType("grass");
          }}
        >
          Grass
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#f72fd3",
          }}
          onClick={() => {
            setPokemonType("psychic");
          }}
        >
          Psychic
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#5151bd",
          }}
          onClick={() => {
            setPokemonType("flying");
          }}
        >
          Flying
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#facc61",
          }}
          onClick={() => {
            setPokemonType("electric");
          }}
        >
          Electric
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#7347ad",
          }}
          onClick={() => {
            setPokemonType("poison");
          }}
        >
          Poison
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "#7347ad",
          }}
          onClick={() => {
            setPokemonType("");
          }}
        >
          All
        </Button>
      </div>
    </header>
  );
}
