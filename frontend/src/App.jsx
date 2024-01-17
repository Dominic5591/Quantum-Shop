import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';
import Navigation from './components/navigation/Navigation';
import HomePage from './components/homepage/HomePage';
import * as sessionActions from './store/session';
import ProductsIndex from './components/product/ProductsIndex';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  useEffect(() => {
    // Check if the current location is '/login' or '/signup'
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    // Update showNavigation state based on the current location
    setShowNavigation(!isAuthPage);
  }, [location.pathname]);

  return (
    <>
      {showNavigation && <Navigation />}
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>,
      },
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
