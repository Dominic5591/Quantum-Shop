import { selectReviewArray } from "../../store/review";
import { useSelector } from 'react-redux';
import ReviewItem from "./ReviewItem";
import './ReviewIndex.css';

const ReviewIndex = ({ product }) => {
  const reviews = useSelector(selectReviewArray);

  return (
    <div className="reviewIndexPageMain">
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