import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = ({ products, category, message }) => {

  const filteredProducts = products.filter(product => product.category === category);
  const maxProducts = filteredProducts.slice(0, 40);

  const carouselRef = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  const scrollTo = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 200;
    const currentScrollPosition = carousel.scrollLeft;

    let newScrollPosition;
    if (direction === 'left') {
      newScrollPosition = currentScrollPosition - scrollAmount;
    } else if (direction === 'right') {
      newScrollPosition = currentScrollPosition + scrollAmount;
    }

    carousel.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseEnter = () => {
      carousel.classList.add('show-scrollbar');
    };

    const handleMouseLeave = () => {
      carousel.classList.remove('show-scrollbar');
    };

    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className='recommendedProductsCarouselContainer'>
      <span className='carouselMessage'>{message}</span>
      <button ref={prevArrowRef} className='carouselArrow left' onClick={() => scrollTo('left')}>&#10094;</button>
      <div ref={carouselRef} className='recommendedProductsCarousel hide-scrollbar'>
        {maxProducts.map((product) => (
          <NavLink key={product.id} className="recommendedProductCard" to={`/products/${product.id}`}>
            <img className='recommendedProductImg' src={product.photoUrl} alt={product.name} />
          </NavLink>
        ))}
      </div>
      <button ref={nextArrowRef} className='carouselArrow right' onClick={() => scrollTo('right')}>&#10095;</button>
    </div>
  );
};

export default CategoryCarousel;
