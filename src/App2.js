import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <Cart />
      <Footer/>
    </Fragment>
    </div>
  );
}

export default App;
