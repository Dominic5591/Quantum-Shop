import { fetchReviews, selectReviewArray } from "../../store/review";
import {  useDispatch, useSelector } from 'react-redux';
import ReviewItem from "./ReviewItem";
import './ReviewIndex.css';
import { useEffect } from "react";

const ReviewIndex = ({ product }) => {
  const reviews = useSelector(selectReviewArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  

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