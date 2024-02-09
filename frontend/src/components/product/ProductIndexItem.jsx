import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import { fetchProduct, selectProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createCartItem, memoizedSelectCartItems, updateCartItem } from '../../store/cartItem';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './ProductIndexItem.css';


const ProductIndexItem = () => {
  const cartItems = useSelector(memoizedSelectCartItems);
  const dispatch = useDispatch();

  const { productId } = useParams();

  const product_id = parseInt(productId);


  const [quantity, setQuantity] = useState(1);
  const product = useSelector(selectProduct(productId));
  const sessionUser = useSelector(state => state.session.user);
  const navigate = useNavigate();

  useEffect(() => {
    
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(product.description) || product.description.length === 0) {
    return <div>No description available</div>;
  }

  const parsedDescription = JSON.parse(product.description[0]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const handleAddCartItem = async (e) => {
    e.preventDefault();
    if (sessionUser) {
      const user_id = sessionUser.id;
      const productToAdd = { quantity, product_id, user_id };

      const existingCartItem = cartItems.find(
        (item) => item.productId === productId
      );

      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };
        dispatch(updateCartItem(updatedCartItem));

      } else {
        dispatch(createCartItem(productToAdd));
      }
    } else {
      navigate('/login');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };
  

  return (
    <div className="productIndexItemPage">
      <div className='topIndexPageDivider'></div>
      <div className='productImageContainer'>
        <img className='productImgShow' src={product.photoUrl} alt={product.name} />
      </div>
      <div className="cardContentItem">
        <div className='middleProductPriceDiv'>
          <h3 className='middleProductPriceH3'>{product.name}</h3>
        </div>
        <div className='middleRatingDiv'>
          <span className='ratingsNum'>{product.rating}.0 </span>
          <Rating rating={product.rating} />
          <span className='numRatings'>1 rating</span>
        </div>
        <div className="middlePriceDivider"></div>
        <div className='middleProductPriceDiv'>
          <p className='middleProductPriceP'><span className='salePrice'>-10%  </span>${product.price}</p>
        </div>
        <div className="middlePriceDivider"></div>
        <div>
          <p className='aboutItemP'>About this item:</p>
          <ul className='productDetailList'>
            {parsedDescription.map((detail, index) => (
              <li className='productDetail' key={`${product.id}_${index}`}>{detail}</li>
            ))}
          </ul>
          
        </div>
        
      </div>
      <div className='addToCartDiv'>
        <div className='buyNowDiv'>
          <h3 className='buyNowH3'>Buy new:</h3>
        </div>
        <div className='productPriceDiv'>
          <h1 className='productPriceH1'>${product.price}</h1>
        </div>
        <div className='inStockDiv'>
          <h1 className='inStockH1'>In Stock</h1>
        </div>
        <div className='quantityDiv'>
          <form></form>
          <span>Quantity: </span>
          <select 
            className='quantityDropDown'
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}

          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className='addToCartBtnDiv'>
          <button onClick={handleAddCartItem} className='addToCartBtn'>Add to cart</button>
        </div>
        
      </div>


      <div className='reviewContainer'>
        <div className="reviewDivider"></div>
        <div className="reviewDivider2"></div>
        <div className="reviewDivider"></div>
      </div>


      <ul className='upperProductFooter' onClick={scrollToTop}>
        <p className='backToTopP'>Back to top</p>
      </ul>
      <ul className='productFooter'>
        <div className='loginLinks'>
          <span className='loginGit'>
            <a href="https://github.com/Dominic5591">
              <img src={git} alt="" />
            </a>
          </span>
          <span className='loginLinkedin'>
            <a href="https://www.linkedin.com/in/dominic-c-1076322a8/">
              <img src={linkedin} alt="" />
            </a>
            
          </span>
          <p className='loginLinkP'>2024 QuantumShop</p>
        </div>
      </ul>
    </div>
  );
};

export default ProductIndexItem;
