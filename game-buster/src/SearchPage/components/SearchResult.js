import GameContent from "../../components/GameContent";

function SearchResult({
    game,
    addHandler
}) {
    return(
        <div>
            {game.rented && <p>This game is already rented</p>}
            <GameContent game={game}/>
            <button 
                disabled={game.rented}
                onClick={() => addHandler(game)}
            >Add to Cart</button>
            <hr></hr>
        </div>
    );
}

export default SearchResult;