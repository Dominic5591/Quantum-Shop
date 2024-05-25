import { RingLoader } from 'react-spinners';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loaderDiv'>
      <RingLoader size={60} color='black' loading={true} />
    </div>
  );
};


export default Loader;