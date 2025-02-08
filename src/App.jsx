import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './theme';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
};
