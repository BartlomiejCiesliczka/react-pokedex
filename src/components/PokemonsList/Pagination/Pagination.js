import "./Pagination.css";

export function Pagination({ prevPage, nextPage, setAPIUrl }) {
  return (
    <div>
      {prevPage && (
        <button className="pagination-btn" onClick={() => setAPIUrl(prevPage)}>
          Previous
        </button>
      )}
      {nextPage && (
        <button className="pagination-btn" onClick={() => setAPIUrl(nextPage)}>
          Next page
        </button>
      )}
    </div>
  );
}
