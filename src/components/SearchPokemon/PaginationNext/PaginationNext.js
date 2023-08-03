import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function PaginationNext({ setButtonNameOrID, pokemonData }) {
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
        setButtonNameOrID(pokemonData.id + 1);
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
    </button>
  );
}
