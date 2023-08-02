import "./ShowButton.css";

export function ShowButton({ showPokemonList, setShowPokemonList }) {
  function showPokemonListBtn() {
    if (showPokemonList) {
      setShowPokemonList(false);
    } else {
      setShowPokemonList(true);
    }
  }

  return (
    <div>
      <button
        onClick={() => showPokemonListBtn()}
        className="show-pokemon-list-btn"
      >
        {showPokemonList ? "Hide list of Pokemon" : "Show list of Pokemon"}
      </button>
    </div>
  );
}
