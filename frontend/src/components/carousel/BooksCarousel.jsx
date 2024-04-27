import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import './BooksCarousel.css';

const BooksCarousel = ({ products }) => {
  const books = products.filter(product => product.category === 'books');
  const maxBooks = books.slice(0, 40);

  const carouselRef = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  const scrollTo = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 400;
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


  return (
    <div className='recommendedProductsCarouselContainer'>
      <button ref={prevArrowRef} className='carouselArrow left' onClick={() => scrollTo('left')}>&#10094;</button>
      <div ref={carouselRef} className='recommendedProductsCarousel'>
        {maxBooks.map((product) => (
          <NavLink key={product.id} className="recommendedProductCard" to={`/products/${product.id}`}>
            <img className='recommendedProductImg' src={product.photoUrl} alt={product.name} />
          </NavLink>
        ))}
      </div>
      <button ref={nextArrowRef} className='carouselArrow right' onClick={() => scrollTo('right')}>&#10095;</button>
    </div>
  );
};

export default BooksCarousel;
