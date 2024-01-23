
import { NavLink } from 'react-router-dom';
import './Homepage.css';
// import gradient from '../../images/gradient.jpg';
import electronics from '../../images/electronics.webp';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
const Homepage = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className='homepageMain'>
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to='/products/Electronics'>
          <h1 className='electronicsH1'>Shop the latest electronics</h1>
          <img className='electImg' src={electronics} alt="" />
        </NavLink>
      </div>
   
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to='/products/Electronics'>
          <h1 className='electronicsH1'>Shop the latest electronics</h1>
          <img className='electImg' src={electronics} alt="" />
        </NavLink>
      </div>
   
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to='/products/Electronics'>
          <h1 className='electronicsH1'>Shop the latest electronics</h1>
          <img className='electImg' src={electronics} alt="" />
        </NavLink>
      </div>
   
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to='/products/Electronics'>
          <h1 className='electronicsH1'>Shop the latest electronics</h1>
          <img className='electImg' src={electronics} alt="" />
        </NavLink>
      </div>
   
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to='/products/Electronics'>
          <h1 className='electronicsH1'>Shop the latest electronics</h1>
          <img className='electImg' src={electronics} alt="" />
        </NavLink>
      </div>
   






      <ul className='upperHomeFooter' onClick={scrollToTop}>
        <p className='backToTopP'>Back to top</p>
      </ul>
      <ul className='homeFooter'>
        <div className='loginLinks'>
          <span className='loginGit'>
            <a href="https://github.com/Dominic5591">
              <img src={git} alt="" />
            </a>
          </span>
          <span className='loginLinkedin'>
            <a href="https://www.linkedin.com/in/dominic-c-1076322a8/">
              <img src={linkedin} alt="" />
            </a>
            
          </span>
          <p className='loginLinkP'>2024 QuantumShop</p>
        </div>
      </ul>
    </div>
  );
};

export default Homepage;