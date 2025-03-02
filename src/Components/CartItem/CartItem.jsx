import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_item from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalAmount,all_product,cartItem,removefromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id]>0){
            return <div>
            <div className="cartitem-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price*cartItem[e.id]}</p>
                <img className='cartitem-remove-icon' src={remove_item} onClick={()=>{removefromCart(e.id)}} alt="" />
            </div>
            <hr />
            </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fees</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>IF You have a Promo code  Enter it here</p>
            <div className="cartitems-promo-box">
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
      </div>

  )
}

export default CartItem 
