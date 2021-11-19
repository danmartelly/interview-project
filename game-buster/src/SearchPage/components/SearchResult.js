import GameContent from "../../components/GameContent";

function SearchResult({
    game,
    addHandler
}) {
    return(
        <div>
            <GameContent game={game}/>
            <button 
                onClick={() => addHandler(game)}
            >Add to Cart</button>
        </div>
    );
}

export default SearchResult;