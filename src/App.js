import { Fragment } from 'react';
import './App.css';
import Store from './components/Store/Store';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <Store />
    </Fragment>
    </div>
  );
}

export default App;
