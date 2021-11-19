import GameContent from "../../components/GameContent";

function SearchResult({
    game,
    checkboxHandler
}) {
    return(
        <div>
            <input type="checkbox" onChange={(e) => checkboxHandler(game, e.target.checked)}></input>
            <GameContent game={game}/>
        </div>
    );
}

export default SearchResult;