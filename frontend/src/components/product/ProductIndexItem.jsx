import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReviewRating, Rating } from './Rating';
import { createCartItem, memoizedSelectCartItems, updateCartItem } from '../../store/cartItem';
import { fetchProduct, selectProduct } from '../../store/product';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectReviewArray } from '../../store/review';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import loading from '../../images/loading.gif';
import './ProductIndexItem.css';
import ReviewIndex from '../review/ReviewIndex';


const ProductIndexItem = () => {
  const cartItems = useSelector(memoizedSelectCartItems);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product_id = parseInt(productId);
  const [loaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(selectProduct(productId));
  const sessionUser = useSelector(state => state.session.user);
  const navigate = useNavigate();

  let reviewSum = 0;
  let reviewCount = 0;
  let reviewAverage = 0;
  let hasReview = false;



  useEffect(() => {
    // dispatch(fetchReviews());
    dispatch(fetchProduct(product_id))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, product_id]);

  let reviews = useSelector(selectReviewArray);

  reviews.forEach(review => {
    if (review && product) {
      reviewSum += review.rating;
      reviewCount += 1;
    } else if (sessionUser) {
      if (review.productId === product.id && review.userId === sessionUser.id) {
        hasReview = true;
      }
    }
  });

  if (reviewCount > 0) {
    reviewAverage = reviewSum / reviewCount;
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

  let reviewForm;

  if (sessionUser && !hasReview) {
    reviewForm = (
      <NavLink to={`/reviews/${productId}`}>
        <button id='reviewButtonOne'>Write a customer review</button>
      </NavLink>
    );
  } else if (sessionUser) {
    reviewForm = (
      <NavLink to={`/reviews/${productId}`}>
        <button id='reviewButtonOne'>Write a customer review</button>
      </NavLink>
    );
  } else {
    reviewForm = (
      <NavLink to={`/reviews/${productId}`}>
        <button id='reviewButtonOne'>Write a customer review</button>
      </NavLink>
    );
  }


  if (!loaded) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

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

  const parsedDescription = JSON.parse(product.description[0]);

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


      <div className="reviewDivider2"></div>

      <div className='reviewContainer'>
        <div className="reviewDivider"></div>
        <div id='productReviewOuterDiv'>
          <div id='productReviewDiv'>
            <h1 id='customerReviewsH1'>Customer Reviews</h1>
            <div id='customerRatingsDiv'>
              <div id='customerRatingsDivInner'>
                <ReviewRating ReviewRating={product.rating} />
                <span id='reviewAverageSpan'>{reviewAverage}   out of 5</span>
              </div>
              <h1 id='reviewAmountH1'>{reviewAmount}</h1>
            </div>
          </div>
          <div id='writeReviewDiv'>
            <h1 id='reviewProductTextH1'>Review this product</h1>
            <h1 id='shareYourThoughtsH1'>Share your thoughts with other customers</h1>
            <div id='createReviewDiv'>
              {reviewForm}
            </div>
          </div>
        </div>
        <div className="reviewDivider"></div>
        <ReviewIndex product={product} />
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