import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

export function Searchbar({
  searchNameOrID,
  setSearchNameOrID,
  searchPokemon,
}) {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        value={searchNameOrID}
        onChange={(e) => setSearchNameOrID(e.target.value)}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            searchNameOrID.length > 0 &&
            searchNameOrID != 0 &&
            searchNameOrID
          ) {
            searchPokemon();
          }
        }}
        placeholder="Enter Pokemon or ID"
        type="search"
      />
      <button
        className="searchbar__button"
        onClick={() => {
          if (
            searchNameOrID.length > 0 &&
            searchNameOrID != 0 &&
            searchNameOrID
          ) {
            searchPokemon();
          }
        }}
      >
        <SearchIcon sx={{ fontSize: 19, fill: "#8a8a8a" }} />
      </button>
    </div>
  );
}
