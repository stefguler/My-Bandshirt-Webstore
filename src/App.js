import { Fragment } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <Shop />
      <Footer/>
    </Fragment>
    </div>
  );
}

export default App;
