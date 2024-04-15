import { useDispatch, useSelector } from "react-redux";
import { ReviewRating } from "../product/Rating";
import { deleteReview } from "../../store/review";
import profile from '../../images/user32.png';
import './ReviewItem.css';

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);


  const removeReview = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
  };

  let userReviews;

  if (sessionUser && sessionUser.id === review.userId) {
    userReviews = (
      <div>
        <div>
          <img id='reviewProfilePreset' src={profile} alt="" />
          <span id="userReviewUsername">{review.username}</span>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <span className="reviewTitleSpan">{review.title}</span>
          </div>
          <div className="reviewBodyDiv">{review.body}</div>
          <div>
            <button>Edit</button>
            <button onClick={removeReview}>Delete</button>
          </div>
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