import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../components';

export const AppLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Outlet></Outlet>
      {(pathname === '/mypage' || pathname === '/routine') && <NavBar />}
    </>
  );
};
