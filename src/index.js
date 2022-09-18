import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from  './App2'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/Store.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/cart" element={ <App2 /> } />
      </Routes>
        </BrowserRouter>
    </Provider>

);


