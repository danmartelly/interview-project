import Header from "../components/Header";
import {Link} from 'wouter';

function CheckoutPage() {
    return (
        <div className="App">
            <Header></Header>
            <Link href="/">Back to browsing</Link>
            Checkout
        </div>
    );
}

export default CheckoutPage;