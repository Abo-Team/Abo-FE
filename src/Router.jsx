import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { Homepage } from './pages/Homepage'; // ✅ Homepage 유지!
import {
  CompleteCreateUser,
  CompleteLogin,
  EditProfile,
  Login,
  Mypage,
  SecessionFirstPage,
  SecessionSecondPage,
  SignUp,
  Routine,
} from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />, // ✅ Homepage 유지!
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/complete-create-user',
        element: <CompleteCreateUser />,
      },
      {
        path: '/complete-login',
        element: <CompleteLogin />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/edit-profile',
        element: <EditProfile />,
      },
      {
        path: '/secession-second',
        element: <SecessionSecondPage />,
      },
      {
        path: '/secession-first',
        element: <SecessionFirstPage />,
      },
      {
        path: '/routine',
        element: <Routine />,
      },
    ],
  },
]);
