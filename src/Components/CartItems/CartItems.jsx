import React, { useContext } from "react";
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from "../../Context/ShopContext";


const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext); 

    // console.log(cartItem);
    console.log(getTotalCartAmount())
    return (
      <div className="cart-items">
        <div className="format-main">
          <p>Product</p>
          <p>Tirle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((item) => {
          if (cartItem[item.id] > 0) {
            return (
              <div>
                <div className="format format-main">
                  <img src={item.image} alt="" className="product-icon" />
                  <p>{item.name}</p>
                  <p>₹{item.new_price}</p>
                  <button className="quantity">{cartItem[item.id]}</button>
                  <p>₹{item.new_price * cartItem[item.id]}</p>
                  <img
                    className="remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
            
        <div className="down">
          <div className="total">
            <h1>Cart Totals</h1>
            <div>
              <div className="total-item">
                <p>Subtatal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="total-item">
                <p>Shiping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="total-item">
                <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
              </div>
                    </div>
                    <button>Checkout</button>
                </div>
                <div className="promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promobox">
                        <input type="text" placeholder="promocode" />
                        <button>Apply</button>
                    </div>
                </div>
        </div>
      </div>
    );
    
};

export default CartItems;
