import { selectProduct } from "../../store/product";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteCartItem, updateCartItem } from "../../store/cartItem";
import "./CartIndexItem.css";

const CartIndexItem = ({ cartItem }) => {
  const product = useSelector(selectProduct(cartItem.productId));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const sessionUser = useSelector((state) => state.session.user);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) return null;

  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteCartItem(cartItem.id));
  };

  const quantityHandler = (e) => {
    const updatedQuantity = parseInt(e.currentTarget.value);
    const updatedCartItem = {
      id: cartItem.id,
      quantity: updatedQuantity,
      userId: sessionUser.id,
      productId: product.id,
    };
    setQuantity(updatedQuantity);
    dispatch(updateCartItem(updatedCartItem));
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`cartIndexItem ${!imageLoaded ? "loading" : ""}`}>
      <div className="cartItem" key={cartItem.id}>
        <NavLink to={`/products/${product.id}`}>
          <div className="cartItemImgDiv">
            <img
              className='cartProductImg'
              src={product.photoUrl}
              alt=""
              onLoad={handleImageLoad}
            />
          </div>
        </NavLink>
        {imageLoaded && (
          <div className="cartItemDivContainer">
            <div className="cartProductNameDiv">
              <NavLink to={`/products/${product.id}`}>
                <h1 className="cartItemNameH1">{product.name}</h1>
              </NavLink>
            </div>
            <div className="cartItemPriceDiv">
              <h1 className="cartItemPriceH1">{product.price}</h1>
            </div>
            <div className="cartItemQuantityDiv">
              <span className="cartItemQtySpan">Qty:</span>
              <select
                value={quantity}
                className="quantityCartItemDropdown"
                id="quantityCartItem"
                onChange={quantityHandler}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <span className="deleteLink" onClick={deleteItem}>Delete</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartIndexItem;
