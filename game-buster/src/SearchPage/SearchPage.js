import Search from "./components/Search";
import Header from "../components/Header";
import {Link} from 'wouter';

function SearchPage() {
    const onSearchHandler = (text) => {
        const query = text.trim().replace(/ /g, "%20");
        fetch(`http://localhost:8000/searchGames?query=${query}`,
        {
            "method": "GET"
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        });
    };
    

    return (
        <div className="App">
            <Header></Header>
            <Link href="/checkout">Cart</Link>
            <Search
                onSearchHandler={onSearchHandler}
                placeholder="game name"
            ></Search>
        </div>
    );
}

export default SearchPage;