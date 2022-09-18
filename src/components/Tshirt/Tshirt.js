import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/slices/Cart';
import { useState } from 'react';

function Tshirt(props) {

    const dispatch = useDispatch();
    const thisItem = props.product;
    const products = useSelector(state => state.cart.products)

    const handleClickAdd = () => {
        dispatch(addItem(thisItem));
    }

    const handleClickRemove = () => {
        dispatch(removeItem(thisItem));
    }

    const amountInCart = () => {
        if (products.length > 0) {
            if (products.some(element => element.productId === thisItem.productId)) {
                return products.map((element) => {
                    if (element.productId === thisItem.productId) {
                        return element.amountInCart
                    }
                })
            }
        }
        return 0;
    }

    return (
        <div className="product">
            <img width="200" src={props.product.avatar} alt="" />
            <div className='product-description-container'>
                <div key={`${props.product.productId}-1`} className={`title`}>{props.product.title}</div>
                <p key={`${props.product.productId}-2`} className={`description`}>{props.product.description}</p>
                <div key={`${props.product.productId}-3`} className={`price`}>{`Price: ${props.product.cost}.00 CHF`}</div>
                <div className="productShopButtons-container">
                    <i className="fa-solid fa-square-plus" onClick={() => handleClickAdd()}></i>
                    <div className="amountInCarDisplay">{amountInCart()}</div>
                    <i className="fa-solid fa-square-minus" onClick={() => handleClickRemove()}></i>
                    {/* <i id={props.product.productId} className="fa-solid fa-cart-shopping" onClick={(event) => handleClick(event)}></i> */}
                </div>
            </div>
        </div>
    )
}

export default Tshirt;