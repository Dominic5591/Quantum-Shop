import Skeleton from 'react-loading-skeleton';
import './CategoryCarouselSkeleton.css';

const CategoryCarouselSkeleton = () => (
  <div className="recommendedProductsCarouselContainerSkeleton">
    <div className="carouselMessage">Loading...</div>
    <div className="recommendedProductsCarouselSkeleton">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="recommendedProductCardSkeleton" enableAnimation={true} />
      ))}
    </div>
  </div>
);

export default CategoryCarouselSkeleton;
