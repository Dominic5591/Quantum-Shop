import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateReview.css';
// import { fetchProduct } from '../../store/product';
// import loading from '../../images/loading.gif';
import { createReview, fetchReviews } from '../../store/review';
import Modal from '../modal/Modal';
import * as modalActions from '../../store/modal';
import { CreateReviewRating } from '../product/Rating';

const CreateReview = ({ productId }) => {
  // const { productId } = useParams();
  // const product_id = parseInt(productId);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const username = sessionUser.username;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);
  // const [error, setError] = useState(null)
  // const [loaded, setLoaded] = useState(false);




  // if (!loaded) {
  //   return (
  //     <div>
  //       <img src={loading} alt="loading" className='loadingGif' />
  //     </div>
  //   );
  // } 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview({
      title,
      body,
      rating,
      userId,
      productId,
      username,
    }))
      .then(() => {
        dispatch(fetchReviews(productId));
      });
    dispatch(modalActions.hideModal());
  };

  const handleCloseReview = (e) => {
    e.preventDefault();
    dispatch(modalActions.hideModal());
  };



  return (
    <Modal id='reviewModal'>
      <div id='modalWrapper'>
        <div id='reviewModalContent'>
          <CreateReviewRating rating={rating} setRating={setRating} />
          <button id='closeReviewBtn' onClick={handleCloseReview}>&#x2715;</button>
          <input type="text" 
            placeholder='Title'
            id='reviewTitleInput'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea 
            placeholder='Write your review'
            id='reviewTextarea'
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          <button id='submitReviewBtn' onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateReview;