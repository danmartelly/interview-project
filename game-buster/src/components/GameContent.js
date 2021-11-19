function GameContent({
    game
}) {
    return(
        <div>
            <a 
                href={game.site_detail_url} 
                target="_blank"
            >
                <img src={game.image.icon_url}/>
                {game.name}
            </a>
        </div>
    )
}

export default GameContent;