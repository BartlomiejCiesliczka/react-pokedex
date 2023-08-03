import Button from "@mui/material/Button";
import "./Header.css";

export function Header() {
  const buttonStyle = {
    height: "100%",
    width: "180px",
    borderRadius: "10px",
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
            color: "red",
          }}
        >
          Fire
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "blue",
          }}
        >
          Water
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "green",
          }}
        >
          Grass
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "red",
          }}
        >
          Physical
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "red",
          }}
        >
          Flying
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "red",
          }}
        >
          Text
        </Button>
        <Button
          variant="text"
          style={buttonStyle}
          sx={{
            color: "red",
          }}
        >
          Text
        </Button>
      </div>
    </header>
  );
}
