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
        setCart(cart.filter((g) => g.guid != gameToDelete.guid))
    }

    const checkoutHandler = () => {
        fetch("http://localhost:8000/checkout",
        {
            "method": "POST",
            "headers": {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            "body": JSON.stringify({
                "guids": cart.map((g) => g.guid)
            })
        })
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