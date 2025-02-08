import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import Homepage from "./pages/Homepage";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/HomePage',
        element: <Homepage />,
      },
    ],
  },
]);
