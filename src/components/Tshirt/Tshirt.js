import './style.css'
import {useDispatch} from 'react-redux'
import { addItem, removeItem, getAmountInCart } from '../../redux/slices/Cart';
import { useState } from 'react';





function Tshirt(props) {
    
    const dispatch = useDispatch();
    const thisItem = props.product;
    let [amountInCart, setAmountInCart] = useState(0)

    const handleClickAdd = () => {
        console.log('Clicked -> ', thisItem.productId, thisItem.title)
        dispatch(addItem(thisItem));
        setAmountInCart(amountInCart+1);
    }


    const handleClickRemove = () => {
        console.log('Clicked -> ', thisItem.productId, thisItem.title)
        dispatch(removeItem(thisItem));
        setAmountInCart((amountInCart !== 0) ? amountInCart-1 : 0);
    }

    return (
        <div className="product">
            <div key={`${props.product.productId}-1`} className={`title`}>{props.product.title}</div>
            <div key={`${props.product.productId}-2`} className={`description`}>{props.product.description}</div>
            <img width="200" src={props.product.avatar} alt="" />
            <div key={`${props.product.productId}-3`} className={`price`}>{`Price: ${props.product.cost}.00 CHF`}</div>
            <div className="productShopButtons-container">
                <i className="fa-solid fa-square-plus" onClick={() => handleClickAdd()}></i>
                <div className="amountInCarDisplay">{amountInCart}</div>
                <i className="fa-solid fa-square-minus" onClick={() => handleClickRemove()}></i>
                {/* <i id={props.product.productId} className="fa-solid fa-cart-shopping" onClick={(event) => handleClick(event)}></i> */}
            </div>
        </div>
    )
}

export default Tshirt;