import GameContent from "../components/GameContent";

function CheckoutItem({
    game,
    deleteHandler
}) {
    return(
        <div>
            <GameContent game={game}></GameContent>
            <button onClick={() => deleteHandler(game)}>delete</button>
        </div>
    )
}

export default CheckoutItem;