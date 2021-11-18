import './App.css';
import { Route } from 'wouter';
import SearchPage from './SearchPage/SearchPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';

function App() {
  return (
    <div>
      <Route path="/" component={SearchPage}/>
      <Route path="/checkout" component={CheckoutPage}/>
    </div>
  );
}

export default App;
