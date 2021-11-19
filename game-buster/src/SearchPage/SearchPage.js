import Search from "./components/Search";
import Header from "../components/Header";
import {Link} from 'wouter';
import SearchResult from "./components/SearchResult";
import { useState } from 'react';

function SearchPage({
    cart,
    setCart
}) {
    const [results, setResults] = useState([]);

    const onSearchHandler = (text) => {
        const query = text.trim().replace(/ /g, "%20");
        fetch(`http://localhost:8000/searchGames?query=${query}`,
        {
            "method": "GET"
        })
        .then(response => response.json())
        .then(json => {
            setResults(json.results);
            console.log(json);
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        });
    };

    const addHandler = (game) => {
        const index = cart.findIndex((g) => g.guid === game.guid);
        if (index < 0) {
            setCart([...cart, game]);
        }
    }
    

    return (
        <div className="App">
            <Header></Header>
            <Link href="/checkout">Cart ({cart.length})</Link>
            <Search
                onSearchHandler={onSearchHandler}
                placeholder="game name"
            ></Search>
            {results.map((game) => (
                <SearchResult
                    key={game.guid}
                    addHandler={addHandler}
                    game={game}/>
            ))}
        </div>
    );
}

export default SearchPage;