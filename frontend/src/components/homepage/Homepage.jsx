
import { NavLink } from 'react-router-dom';
import electronics from '../../images/electronics.jpg';
import books from '../../images/books.jpg';
import fashion from '../../images/fashion.jpg';
import homeGoods from '../../images/home-goods.jpg';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Homepage.css';


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
        <NavLink className='electronics' to={`/categories/electronics`}>
          <h1 className='electronicsH1'>Best sellers in electronics</h1>
          <img className='electImgs' src={electronics} alt="" />
        </NavLink>
      </div>
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to={`/categories/books`}>
          <h1 className='electronicsH1'>Shop the best selling books</h1>
          <img className='electImg' src={books} alt="" />
        </NavLink>
      </div>
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to={`/categories/fashion`}>
          <h1 className='electronicsH1'>Shop the latest fashion trends</h1>
          <img className='electImg' src={fashion} alt="" />
        </NavLink>
      </div>
      <div className='categoryElectronicsDiv'>
        <NavLink className='electronics' to={`/categories/home`}>
          <h1 className='electronicsH1'>Essential home goods</h1>
          <img className='electImg' src={homeGoods} alt="" />
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