import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function PaginationPrevious({ setButtonNameOrID, pokemonData }) {
  const buttonStyle = {
    padding: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };
  return (
    <button
      style={buttonStyle}
      onClick={() => {
        setButtonNameOrID(pokemonData.id - 1);
      }}
    >
      <ArrowBackIosIcon sx={{ fontSize: 40 }} />
    </button>
  );
}
