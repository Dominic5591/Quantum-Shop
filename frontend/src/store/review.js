import { fetchProduct } from "./product";
import csrfFetch from './csrf';

export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";


const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});


const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId,
});


export const selectReview = reviewId => state => {
  return state?.reviews ? state.reviews[reviewId] : null;
};

export const selectReviews = state => {
  return state?.reviews ? Object.values(state.reviews) : [];
};

export const fetchReviews = () => async dispatch => {
  const res = await csrfFetch('/api/reviews');
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReviews(data.reviews));
  }
};


export const fetchReview = reviewId => async dispatch => {
  const res = await csrfFetch(`/api/review/${reviewId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReviews(data.reviews));
  }
};


export const createReview = review => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data.review));
    dispatch(fetchProduct(data.product));
  }
};


export const updateReview = review => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data.review));
  }
};

export const deleteReview = reviewId => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(removeReview(reviewId));
  }
};


const reviewReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
  case RECEIVE_REVIEW:
    return { ...state, [action.review.id]: action.review };
  case RECEIVE_REVIEWS:
    return { ...state, ...action.reviews };
  case REMOVE_REVIEW:
    delete newState[action.reviewId];
    return newState;
  default:
    return state;
  }
};

export default reviewReducer;