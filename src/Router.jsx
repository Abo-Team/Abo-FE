import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { SignUp } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>Hello</div>,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);
