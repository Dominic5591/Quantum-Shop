import './Rating.css';

export const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>);
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};




export const ReviewRating = ({ ReviewRating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < ReviewRating ? 'star filled' : 'star'}>&#9733;</span>);
    }
    return stars;
  };

  return <div className="star-rating-review">{renderStars()}</div>;
};


export const CreateReviewRating = ({ rating, setRating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? 'star filled' : 'reviewStar'}
          onClick={() => setRating(i + 1)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className="create-star-rating-review">{renderStars()}</div>;
};

