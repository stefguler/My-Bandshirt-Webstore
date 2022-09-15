import './style.css'
import React from 'react';
import logo from '../../assets/shop_logo.jpg'


function Header() {

    return (
        <header className="store-banner">
            <div className='banner-logo'><img width='100' src={logo} alt="Shopping_Cart_Logo" /></div>
            <div className="banner-title"><span>My Cool Tshirts!</span></div>
            <div className='right'>
                <div className="banner-car-status">{1}</div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </header>

    )
}

export default Header;








