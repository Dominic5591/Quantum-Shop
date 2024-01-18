import { useEffect } from 'react';
import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import { fetchProduct, selectProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ProductIndexItem.css';

const ProductIndexItem = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectProduct(productId));
  

  
  useEffect(() => {
    
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  // Check if the product is not yet available
  if (!product) {
    return <div>Loading...</div>;
  }

  let productDetails = JSON.parse(product.description[0]);


  if (!Array.isArray(product.description)) {
    let productDetails = [product.description]
  }

  return (
    <div className="productIndexItemPage">
      <div className='productImageContainer'>
        <img src={placeholder} alt={product.name} />
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
          <p className='middleProductPriceP'>${product.price}</p>
        </div>
        <div>
          <ul className='productDetailList'>
            {productDetails.map((detail, index) => (
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
          <span>Quantity: </span>
          <select className='quantityDropDown' name="quantity" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
 
        <div className='addToCartBtnDiv'>
          <button className='addToCartBtn'>Add to cart</button>
        </div>
      </div>


      <div className='reviewContainer'>
        <Rating rating={product.rating} />
        <h1>Customer reviews</h1>
        <h2>Review this product</h2>
        <button>Write a customer review</button>
      </div>
    </div>
  );
};

export default ProductIndexItem;
