import './App.css';
import { Route } from 'wouter';
import SearchPage from './SearchPage/SearchPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Route path="/" component={() => 
        <SearchPage cart={cart} setCart={setCart}/>
      }/>
      <Route path="/checkout" component={() => 
        <CheckoutPage cart={cart} setCart={setCart}/>
      }/>
    </div>
  );
}

export default App;
