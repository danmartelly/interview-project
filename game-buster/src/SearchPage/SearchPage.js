import Search from "./components/Search";
import Header from "../components/Header";
import {Link} from 'wouter';

function SearchPage() {
    return (
        <div className="App">
            <Header></Header>
            <Link href="/checkout">Cart</Link>
            <Search></Search>
        </div>
    );
}

export default SearchPage;