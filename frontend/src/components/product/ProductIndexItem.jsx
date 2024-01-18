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

  return (
    <div className="productIndexItemPage">
      <div className='productImageContainer'>
        <img src={placeholder} alt={product.name} />
      </div>
      <div className="cardContentItem">
        <h3>{product.name}</h3>
        <Rating rating={product.rating} />
        <p className='productPriceItem'>${product.price}</p>
      </div>
      <div className='addToCartDiv'>
        <div className='buyNowDiv'>
          <h3 className='buyNowH3'>Buy new:</h3>
        </div>
        <div className='productPriceDiv'>
          <h1 className='productPriceH1'>${product.price}</h1>
        </div>

        <h1 className='inStockH1'>In Stock</h1>
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
        <div className='addToCartBtnDiv'>
          <button>Add to cart</button>
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
