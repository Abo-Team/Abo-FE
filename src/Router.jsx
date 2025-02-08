// src/Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import Homepage from "./pages/Homepage"; // ✅ 파일명과 일치

import { SignUp } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />, // ✅ 수정 완료
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);
