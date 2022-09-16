import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/slices/Cart';
import { useState } from 'react';
import Tshirt from '../Tshirt/Tshirt';

function Cart() {

  // const dispatch = useDispatch();

  const products = useSelector(state => state.cart.products)
  const totalPrice = useSelector(state => state.cart.totalPrice)

  const totalAmountInCart = () => {
    if (products.length > 0) {
      return products.reduce((prev, curr) => {
        return prev + curr.amountInCart
      }, 0)
    }
    return 0;
  }

  // const handleClickAdd = () => {
  //     console.log('Clicked -> ')
  // }

  // const handleClickRemove = () => {
  //     console.log('Clicked -> ')
  // }

  return (
    <>
      <div className="cart">
        <div>I AM THE CART</div>
        <div className='items-in-cart-container'>
          <div className='total-amount-in-cart'>Your cart ({totalAmountInCart()} pce)</div>
          <button>Clear Cart</button>
          {products.map((product, idx) => {
            return <div className='cart-container'>
              <div className='item-amount'>{product.amountInCart}x</div>
              <div className='item-title'>"{product.title}"</div>
              <div className='item-price'>price {product.cost * product.amountInCart}.00 CHF</div>
              <div className='remove-item'>
                <i class="fa-solid fa-trash"></i>
                <span>Remove</span>
              </div>
              <div className='add-item'>
              <i class="fa-solid fa-cart-plus"></i>
                <span>Add</span>
              </div>
            </div>
          })
          }
        </div>

        <div className='estimated-delivery-container'>Estimated delivery
          <div className='estimated-delivery-timespan'>We, 21.09. - Sa, 24.09.</div>
        </div>

        <div className='payment-methods-container'>We accept
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-paypal"></i>
          <i class="fa-brands fa-cc-amex"></i>
          <i class="fa-brands fa-bitcoin"></i>
        </div>

        <div className='cart-total-container'>Total
          <div className='total-price'>Subtotal {totalPrice}.00 CHF</div>
          <div>GO TO CHECKOUT</div>
        </div>
      </div>
    </>
  )
}

export default Cart;