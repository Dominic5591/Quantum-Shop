import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CreateReview.css';
import { fetchProduct } from '../../store/product';
import loading from '../../images/loading.gif';
import { createReview } from '../../store/review';



const CreateReview = () => {
  const { productId } = useParams();
  const product_id = parseInt(productId);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchProduct(product_id))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, product_id]);


  if (!loaded) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createReview({
      title,
      body,
      rating,
      userId,
      productId,
    }));
  };

};

export default CreateReview;