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

    const checkboxHandler = (game, checked) => {
        console.log(cart);
        if (checked) {
            const index = cart.findIndex((g) => g.guid === game.guid);
            if (index < 0) {
                setCart([...cart, game]);
            }
        } else if (!checked) {
            setCart(cart.filter((g) => g.guid != game.guid))
        }
    }
    

    return (
        <div className="App">
            <Header></Header>
            <Link href="/checkout">Cart</Link>
            <Search
                onSearchHandler={onSearchHandler}
                placeholder="game name"
            ></Search>
            {results.map((game) => (
                <SearchResult
                    key={game.guid}
                    checkboxHandler={checkboxHandler}
                    game={game}/>
            ))}
        </div>
    );
}

export default SearchPage;