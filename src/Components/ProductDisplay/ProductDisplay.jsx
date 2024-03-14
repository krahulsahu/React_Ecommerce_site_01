import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_icon2 from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
 
  return (
    <div className="product-display">
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-image">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon2} alt="" />
          <p>(122)</p>
        </div>
        <div className="right-prices">
          <div className="right-prices-old">${product.old_price}</div>
          <div className="right-prices-new">${product.new_price}</div>
        </div>
        <div className="right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          explicabo nam beatae id, nemo cum eos earum esse expedita tempore quod
          rerum alias eius harum est? Itaque tempore tenetur asperiores est a
          nesciunt, sequi repellendus, aliquam quam, modi voluptate. Non rerum
          voluptas consequuntur impedit necessitatibus exercitationem
          praesentium error fugit dicta.
        </div>
        <div className="rigth-size">
          <h1>Select Size</h1>
          <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button  onClick={() => { addToCart(product.id) }}> ADD TO CART  </button>
        <p className="right-category">
          <span>Category : </span>Women, T-Shirt
        </p>
        <p className="right-category">
          <span>Tags : </span>Latest , Modern
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
