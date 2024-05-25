import { useEffect, useState } from 'react';
import Loader from '../loaders/Loader';
import Footer from '../footer/Footer';
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className='checkoutMain'>
        <div className='checkoutPageDiv'>
          <h1 className='OrderPlaced'>Thank you for placing order</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;