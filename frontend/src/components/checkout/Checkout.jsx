import './Checkout.css';
import Footer from '../footer/Footer';


const Checkout = () => {
  return (
    <>
      <div className='checkoutMain'>
        <div className='checkoutPageDiv'>
          <h1 className='OrderPlaced'>Thank you for placing order</h1>
        </div>
      </div>
    
      <Footer />
    </>
  );
};

export default Checkout;