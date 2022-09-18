import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, addItemFromCart, removeItemFromCart } from '../../redux/slices/Cart';
import { useEffect } from 'react';
import Tshirt from '../Tshirt/Tshirt';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useNavigate} from 'react-router-dom'

function Cart() {

  const dispatch = useDispatch();
  const authState = useSelector(state => state.token.token)
  const navigate = useNavigate();

  useEffect(() => {
      if (authState === undefined) {
          navigate('/')
      }
  }, [authState]);

  const products = useSelector(state => state.cart.products)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const deliveryCost = 10;

  const totalAmountInCart = () => {
    if (products.length > 0) {
      return products.reduce((prev, curr) => {
        return prev + curr.amountInCart
      }, 0)
    }
    return 0;
  }

  const handleClearAll = () => {
    console.log('Clear all clicked -> ')

    dispatch(clearCart());
  }

  const handleClickAdd = (event) => {
    console.log('Add clicked -> ')
    dispatch(addItemFromCart(parseInt(event.target.id)))

  }

  const handleClickRemove = (event) => {
    console.log('Remove clicked -> ')
    dispatch(removeItemFromCart(parseInt(event.target.id)))
  }

  return (
    <>
      <Header></Header>
      <div className="cart-container">
        <div className='items-in-cart-container'>
          <div className='items-in-cart-header-container'>
            <h1 className='total-amount-in-cart'>Your cart ({totalAmountInCart()} pce)</h1>
            <button className='clear-all-button' onClick={() => handleClearAll()} >Clear Cart</button>
          </div>
          <table className='items-table'>
            <tr className='table-title'>
              <th>Amount</th>
              <th>Avatar</th>
              <th>Product Name</th>
              <th>Price (CHF)</th>
              <th>&minus;</th>
              <th>&#43;</th>
            </tr>

            {products.map((product) => {
              return <tr className='item-container' key={product.productId}>
                <td className='item-amount'>{product.amountInCart}x</td>
                <td><img width="50" src={product.avatar} alt="" /></td>
                <td className='item-title'>"{product.title}"</td>
                <td className='item-price'>{product.cost * product.amountInCart}.00</td>
                <td className='item-remove'><button id={product.productId} onClick={(event) => handleClickRemove(event)}>Remove</button></td>
                <td className='item-add'><button id={product.productId} onClick={(event) => handleClickAdd(event)}>Add more</button></td>              </tr>
            })}
          </table>
        </div>

        <div className='cart-total-container'>
          <h1>Total</h1>
          <h3 className='total-price'>Subtotal {totalPrice}.00 CHF</h3>
          <h4 className='delivery-price'>Delivery {deliveryCost}.00 CHF</h4>
          <div className='line'></div>
          <h2 className='total-price'>Total (VAT-Incl.) {totalPrice + deliveryCost}.00 CHF</h2>
          <button>GO TO CHECKOUT</button>
        </div>

        <div className='estimated-delivery-container'>
          <h1>Estimated delivery</h1>
          <span className='estimated-delivery-timespan'>We, 21.09. - Sa, 24.09.</span>
        </div>


        <div className='payment-methods-container'>
          <h1>We accept</h1>
          <div className='i-container'>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-bitcoin"></i>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default Cart;