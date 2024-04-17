import { selectReviewArray } from "../../store/review";
import {  useSelector } from 'react-redux';
// import * as modalActions from '../../store/modal';
import ReviewItem from "./ReviewItem";
import './ReviewIndex.css';
// import CreateReview from "./CreateReview";

const ReviewIndex = ({ product }) => {
  const reviews = useSelector(selectReviewArray);
  // const dispatch = useDispatch();
  // const modalType = useSelector((state) => state.modal.type === "SHOW_REVIEW_MODAL")

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(modalActions.showModal("SHOW_REVIEW_MODAL"));
  // };

  return (
    <div className="reviewIndexPageMain">
      <button ></button>
      {/* {modalType && <CreateReview productId={product.id}/>} */}
      {reviews.map((review, index) => {
        if (review.productId == product.id) {
          return (
            <div className="reviewIndexDiv" key={`${review.id}_${index}`}>
              <ReviewItem review={review}/>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ReviewIndex;