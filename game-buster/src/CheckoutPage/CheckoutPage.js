import Header from "../components/Header";
import {Link} from 'wouter';
import CheckoutItem from "./CheckoutItem";
import {useLocation} from "wouter";

function CheckoutPage({
    cart,
    setCart
}) {
    const [, setLocation] = useLocation();
    const deleteHandler = (gameToDelete) => {
        alert('lets delete');
    }

    const checkoutHandler = () => {
        setCart([]);
        alert("Your games will reach you in the mail within 3 business days");
        setLocation("/");
    }

    return (
        <div className="App">
            <Header></Header>
            <Link href="/">Back to browsing</Link>
            {cart.map((game) => (
                <CheckoutItem 
                    key={game.guid}
                    deleteHandler={deleteHandler}
                    game={game}/>
            ))}
            <button onClick={checkoutHandler} disabled={cart.length === 0}>Checkout</button>
        </div>
    );
}

export default CheckoutPage;