import { selectProduct } from "../../store/product";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteCartItem, updateCartItem } from "../../store/cartItem";
import "./CartIndexItem.css";

const CartIndexItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(selectProduct(cartItem.productId));
  const sessionUser = useSelector((state) => state.session.user);
  const [quantity, setQuantity] = useState(cartItem.quantity);

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



  return (
    <div className={`cartIndexItem`}>
      <div className="cartItem" key={cartItem.id}>
        <div className="cartItemImgDiv">
          <img
            className='cartProductImg'
            src={product.photoUrl}
            alt=""
            onClick={() => navigate(`/products/${product.id}`)}
          />
        </div>

        <div className="cartItemDivContainer">
          <div className="cartProductNameDiv">
            <h1 onClick={() => navigate(`/products/${product.id}`)} className="cartItemNameH1">{product.name}</h1>
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
      </div>
    </div>
  );
};

export default CartIndexItem;
