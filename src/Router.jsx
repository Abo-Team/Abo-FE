import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { Homepage } from './pages/Homepage'; // ✅ named export 방식 유지
import { SignUp } from './pages/SignUp'; // ✅ named export 방식 유지

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />, // ✅ named import 사용!
      },
      {
        path: '/signup',
        element: <SignUp />, // ✅ named import 사용!
      },
    ],
  },
]);
