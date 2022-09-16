import { Fragment } from 'react';
import './App.css';
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <Store />
      <Footer/>
    </Fragment>
    </div>
  );
}

export default App;
