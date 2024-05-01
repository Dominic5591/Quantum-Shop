const CategoryCarouselSkeleton = () => (
  <div className="recommendedProductsCarouselContainer">
    <div className="carouselMessage">Loading...</div>
    <div className="recommendedProductsCarousel">
      <div className="recommendedProductCard" />
      <div className="recommendedProductCard" />
      <div className="recommendedProductCard" />
      <div className="recommendedProductCard" />
    </div>
  </div>
);

export default CategoryCarouselSkeleton;
