import './App.css';
import { Link, Route } from 'wouter';
import SearchPage from './SearchPage/SearchPage';

function App() {
  return (
    <div>
      <Route path="/" component={SearchPage}></Route>
      <Route path="/checkout">checkout</Route>
    </div>
  );
}

export default App;
