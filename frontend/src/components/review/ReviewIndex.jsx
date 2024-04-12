import { selectReviewArray } from "../../store/review";
import { useSelector } from 'react-redux';
import ReviewItem from "./ReviewItem";
import 'ReviewIndex.css';

const ReviewIndex = ({ product }) => {
  const reviews = useSelector(selectReviewArray);

  return (
    <div className="reviewIndexPageMain">
      {reviews.map((review, index) => {
        if (review.product_id == product.id) {
          return (
            <div className="reviewIndexDiv" key={`${review.id}_${index}`}>
              <ReviewItem  />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ReviewIndex;