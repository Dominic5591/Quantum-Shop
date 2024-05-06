import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams  } from 'react-router-dom';
import { ReviewRating, Rating } from './Rating';
import { createCartItem, memoizedSelectCartItems, updateCartItem } from '../../store/cartItem';
import { fetchProduct, selectProduct } from '../../store/product';
import { selectReviewProductArray, fetchReviews } from '../../store/review';
import loading from '../../images/loading.gif';
import ReviewIndex from '../review/ReviewIndex';
import * as modalActions from '../../store/modal';
import ReviewModalCreatorEditor from '../review/ReviewModalCreatorEditor';
import Footer from '../footer/Footer';
import './ProductIndexItem.css';


const ProductIndexItem = () => {
  const cartItems = useSelector(memoizedSelectCartItems);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product_id = parseInt(productId);
  const [loaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(selectProduct(productId));
  const sessionUser = useSelector(state => state.session.user);
  const modalType = useSelector((state) => state.modal.type === "SHOW_REVIEW_MODAL");
  const navigate = useNavigate();

  let reviewSum = 0;
  let reviewAverage = 0;

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchProduct(product_id))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, product_id]);

  let reviews = useSelector(state => selectReviewProductArray(state, product_id));
  let reviewCount = 0;  

  reviews.forEach(review => {
    reviewSum += review.rating;
    reviewCount += 1;

  });

  if (reviewCount > 0) {
    reviewAverage = (reviewSum / reviewCount).toFixed(1);
  }

  let reviewAmount;

  if (reviewCount === 1) {
    reviewAmount = (
      <span id='reviewAmountH1'>{reviewCount} rating</span>
    );
  } else {
    reviewAmount = (
      <span id='reviewAmountH1'>{reviewCount} ratings</span>
    );
  }

  if (!product) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }
  
  let parsedDescription = JSON.parse(product.description[0]);

  if (!loaded && !parsedDescription) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  const handleAddCartItem = async (e) => {
    e.preventDefault();
    if (sessionUser) {
      const user_id = sessionUser.id;
      const productToAdd = { quantity, product_id, user_id };

      const existingCartItem = cartItems.find(
        (item) => item.productId === product.id
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


  const handleClick = (e) => {
    e.preventDefault();
    dispatch(modalActions.showModal("SHOW_REVIEW_MODAL"));
  };


  return (
    <>
      <div className="productIndexItemPage">
        <img className='productImgShow' src={product.photoUrl} alt={product.name} />
        <div className="cardContentItem">
          <h3 className='middleProductNameH3'>{product.name}</h3>
          <div className='middleRatingDiv'>
            <span className='ratingsNum'>{reviewAverage}  </span>
            <Rating rating={product.rating} />
            <span className='numRatings'>{reviewAmount}</span>
          </div>
          <div className="middlePriceDivider"></div>
          <p className='middleProductPriceP'><span className='salePrice'>-10%  </span>${product.price}</p>
          <div className="middlePriceDivider"></div>
          <p className='aboutItemP'>About this item:</p>
          <ul className='productDetailList'>
            {parsedDescription.map((detail, index) => (
              <li className='productDetail' key={`${product.id}_${index}`}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className='addToCartDiv'>
          <h3 className='buyNowH3'>Buy new:</h3>
          <h1 className='productPriceH1'>${product.price}</h1>
          <h1 className='inStockH1'>In Stock</h1>
          <span>Quantity:</span>
          <select 
            className='quantityDropDown'
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <button onClick={handleAddCartItem} className='addToCartBtn'>Add to cart</button>
        </div>
      </div>
      <div className='reviewContainer'>
        <div id='productReviewDiv'>
          <h1 id='customerReviewsH1'>Customer Reviews</h1>
          <ReviewRating ReviewRating={reviewAverage} />
          <span id='reviewAverageSpan'>{reviewAverage} out of 5</span>
          <h1 id='reviewAmountH1'>{reviewAmount}</h1>
        </div>
        <div id='writeReviewDiv'>
          <h1 id='reviewProductTextH1'>Review this product</h1>
          <h1 id='shareYourThoughtsH1'>{ sessionUser ? "Share your thoughts with other customers" : "Sign in to review this product"}</h1>
          {modalType && <ReviewModalCreatorEditor productId={product_id}/>}
          {sessionUser ? 
            <button id='reviewButtonOne' onClick={handleClick}>Write a customer review</button>
            :
            <>
              <button id='reviewButtonOneSignIn' onClick={() => navigate("/login")}>Sign in to your account</button>
              <button id='reviewButtonOne' onClick={() => navigate("/signup")}>Sign up now</button>
            </>
          } 
        </div>
      </div>
      <ReviewIndex product={product} />
      <Footer />
    </>
  );
};

export default ProductIndexItem;