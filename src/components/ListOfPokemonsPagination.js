import '../style/ListOfPokemonsPagination.css';

export function ListOfPokemonsPagination({prevPage, nextPage, setCurrentPageUrl}){
  return(
    <div>
      {prevPage && <button className='pagination-btn' onClick={() => setCurrentPageUrl(prevPage)}>Previous</button>}
      {nextPage && <button className='pagination-btn' onClick={() => setCurrentPageUrl(nextPage)}>Next page</button>}
    </div>
  )
}