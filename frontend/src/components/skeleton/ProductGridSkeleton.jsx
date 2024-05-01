import Skeleton from 'react-loading-skeleton';
import './ProductGridSkeleton.css';


const ProductGridSkeleton = () => (
  <div className="productGridContainerSkeleton">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="largeProductGridCardSkeleton">
        <div className="productGridSkeleton">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="productGridCardSkeleton" enableAnimation={true} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ProductGridSkeleton;
