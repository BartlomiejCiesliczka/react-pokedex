export function Button({prevPage, nextPage, setCurrentPageUrl}){
  return(
    <div>
      {prevPage && <button className='btn' onClick={() => setCurrentPageUrl(prevPage)}>Previous</button>}
      {nextPage && <button className='btn' onClick={() => setCurrentPageUrl(nextPage)}>Next page</button>}
    </div>
  )
}