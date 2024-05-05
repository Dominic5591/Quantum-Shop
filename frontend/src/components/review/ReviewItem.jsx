import { useDispatch, useSelector } from "react-redux";
import { ReviewRating } from "../product/Rating";
import { deleteReview, fetchReviews } from "../../store/review";
import profile from '../../images/user32.png';
import { useEffect } from "react";
import './ReviewItem.css';
import * as modalActions from '../../store/modal';
import ReviewModalCreatorEditor from "./ReviewModalCreatorEditor";

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const modalType = useSelector((state) => state.modal.type === "SHOW_EDIT_MODAL");


  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const editReview = (e) => {
    e.preventDefault();
    dispatch(modalActions.showModal("SHOW_EDIT_MODAL", { review: review, productId: review.productId }));
  };
  

  const removeReview = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
  };

  let userReviews;

  if (sessionUser && sessionUser.id === review.userId) {
    userReviews = (
      <div id="customerReviewItemDivMain">
        <div id="customerReviewItemDiv">
          <img id='reviewProfilePreset' src={profile} alt="" />
          <span id="userReviewUsername">{review.username}</span>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <span className="reviewTitleSpan">{review.title}</span>
            {modalType && <ReviewModalCreatorEditor productId={review.productId} />}
          </div>
          <div className="reviewBodyDiv">{review.body}</div>
          <button className='editDeleteReviewBtn' onClick={editReview}>Edit</button>
          <button className='editDeleteReviewBtn' onClick={removeReview}>Delete</button>
        </div>
      </div>
    );
  } else {
    userReviews = (
      <div id="customerReviewItemDivMain">
        <div id="customerReviewItemDiv">
          <img id='reviewProfilePreset' src={profile} alt="" />
          <span id="userReviewUsername">{review.username}</span>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <span className="reviewTitleSpan">{review.title}</span>
          </div>
          <div className="reviewBodyDiv">{review.body}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {userReviews}
    </>
  );
};

export default ReviewItem;