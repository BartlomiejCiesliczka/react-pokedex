import '../style/ListOfPokemonControlButton.css';

export function ListOfPokemonControlButton({showPokemonListHTML, setShowPokemonListHTML}){

  function changeHTMLshowPokemonListBtn(){
    if(showPokemonListHTML === 'Show list of Pokemon' ){
      setShowPokemonListHTML('Hide list of Pokemon')
    } else {
      setShowPokemonListHTML('Show list of Pokemon')
    }
  }

  return(
    <div>
      <button
      onClick={() => changeHTMLshowPokemonListBtn()}
      className='show-pokemon-list-btn'>
        {showPokemonListHTML}
      </button>
    </div>
  )
}