export function Pagination({ prevPage, nextPage, setAllPokemonAPI }) {
  const buttonStyle = {
    margin: "20px",
  };

  return (
    <div>
      {prevPage && (
        <button style={buttonStyle} onClick={() => setAllPokemonAPI(prevPage)}>
          Previous
        </button>
      )}
      {nextPage && (
        <button style={buttonStyle} onClick={() => setAllPokemonAPI(nextPage)}>
          Next page
        </button>
      )}
    </div>
  );
}
