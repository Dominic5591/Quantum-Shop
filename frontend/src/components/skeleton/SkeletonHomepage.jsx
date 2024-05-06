import Footer from "../footer/Footer";
import homepageBanner from '../../images/homepageBanner.jpg';
import ProductGridSkeleton from "./ProductGridSkeleton";
import CategoryCarouselSkeleton from "./CategoryCarouselSkeleton";
import './SkeletonHomepage.css';

const SkeletonHomepage = () => {
  return (
    <div className="pageContainerSkeleton">
      <div className='homeBannerContainerSkeleton'>
        <img src={homepageBanner} alt="Homepage Banner" className="homepageBanner"/>
      </div>
      <div className='homepageMainSkeleton'>
        <CategoryCarouselSkeleton />
        <ProductGridSkeleton />
        <CategoryCarouselSkeleton />
        <ProductGridSkeleton />
        <CategoryCarouselSkeleton />
      </div>
      <Footer />
    </div>

  );
};

export default SkeletonHomepage;