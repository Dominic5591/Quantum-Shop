import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';
import Navigation from './components/navigation/Navigation';
// import SearchBar from './components/navigation/SearchBar';
import * as sessionActions from './store/session';


import ProductsIndex from './components/product/ProductsIndex';
import ProductIndexItem from './components/product/ProductIndexItem';
import CartIndex from './components/cart/CartIndex';
import Checkout from './components/checkout/Checkout';
import Homepage from './components/homepage/Homepage';
import SearchIndex from './components/search/SearchIndex';
import Orders from './components/order/Orders';


import { LocaleProvider } from './LocalProvider';
import Footer from './components/footer/Footer';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();


  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);



  return (

    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navigation />}
      {location.pathname === '/' && <Homepage />}
      {isLoaded && <Outlet />}
      {location.pathname === '/' && <Footer />}
    </>
  );
}

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'signup',
        element: <SignupForm />,
      },
      {
        path: 'products',
        element: <ProductsIndex />,
      },
      {
        path: "products/:productId",
        element: <ProductIndexItem />,
      },
      {
        path: "/categories/:category",
        element: <ProductsIndex />,
      },
      {
        path: "cart",
        element: <CartIndex />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "products/search",
        element: <SearchIndex />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
    ],
  },
]);


function App() {
  return (
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  );
}

export default App;
