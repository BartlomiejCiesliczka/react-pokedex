import "./Pagination.css";

export function Pagination({ prevPage, nextPage, setAllPokemonAPI }) {
  return (
    <div>
      {prevPage && (
        <button
          className="pagination-btn"
          onClick={() => setAllPokemonAPI(prevPage)}
        >
          Previous
        </button>
      )}
      {nextPage && (
        <button
          className="pagination-btn"
          onClick={() => setAllPokemonAPI(nextPage)}
        >
          Next page
        </button>
      )}
    </div>
  );
}
