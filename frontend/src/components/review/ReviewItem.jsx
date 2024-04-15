import { useDispatch, useSelector } from "react-redux";
import { ReviewRating } from "../product/Rating";
import { deleteReview } from "../../store/review";
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
          <h1>Your reviews</h1>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <h1 className="reviewTitleH1">{review.title}</h1>
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
      <div>
        <div>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <h1 className="reviewTitleH1">{review.title}</h1>
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