import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';
import Navigation from './components/navigation/Navigation';
import * as sessionActions from './store/session';


import ProductsIndex from './components/product/ProductsIndex';
import ProductIndexItem from './components/product/ProductIndexItem';
import CartIndex from './components/cart/CartIndex';
import Checkout from './components/checkout/Checkout';
import Homepage from './components/homepage/Homepage';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showHomePage, setShowHomePage] = useState(true);
  const location = useLocation();


  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  useEffect(() => {

    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    setShowNavigation(!isAuthPage);
  }, [location.pathname]);

  useEffect(() => {

    const isAuthPage = location.pathname === '/';
    setShowHomePage(isAuthPage);
  }, [location.pathname]);

  return (
    <>
      {showNavigation && <Navigation />}
      {showHomePage && <Homepage />}
      {isLoaded && <Outlet />}
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
        path: "/products/:category",
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
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
