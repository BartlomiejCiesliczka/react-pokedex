import Button from "@mui/material/Button";

export function Header({ setPokemonType }) {
  const headerStyle = {
    height: "50px",
    width: "100vw",
    backgroundColor: "#ffffff",
    display: "flex",
    borderBottom: "2px solid",
  };

  const buttonLayoutStyle = {
    margin: "0 auto",
  };

  const buttonStyle = {
    height: "100%",
    width: "180px",
  };
  return (
    <header style={headerStyle}>
      <div style={buttonLayoutStyle}>
        <Button
          style={buttonStyle}
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
