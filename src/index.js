import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.js'
import { Provider } from 'react-redux';
import store from './redux/Store.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp';
import Validate from './components/Validate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/validation" element={ <Validate /> } />
      </Routes>
        </BrowserRouter>
    </Provider>

);


