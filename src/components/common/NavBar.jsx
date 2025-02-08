import styled from '@emotion/styled';
import { Calendar, Home, Mypage, Routine } from '../../assets';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [isHome, setIsHome] = useState(false);
  const [isRoutine, setIsRoutine] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isMypage, setIsMypage] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/home') {
      setIsHome(true);
      setIsRoutine(false);
      setIsCalendar(false);
      setIsMypage(false);
    } else if (pathname === '/routine') {
      //루틴 path
      setIsHome(false);
      setIsRoutine(true);
      setIsCalendar(false);
      setIsMypage(false);
    } else if (pathname === '/calendar') {
      //캘린더 path
      setIsHome(false);
      setIsRoutine(false);
      setIsCalendar(true);
      setIsMypage(false);
    } else if (pathname === '/mypage') {
      //마이페이지 path
      setIsHome(false);
      setIsRoutine(false);
      setIsCalendar(false);
      setIsMypage(true);
    }
  }, [pathname]);

  const homeClick = () => {
    navigate('/home');
  };

  const routineClick = () => {
    navigate('/routine');
  };

  const calendarClick = () => {
    navigate('/calendar');
  };

  const mypageClick = () => {
    navigate('/mypage');
  };

  return (
    <NavBarContainer>
      <Home onClick={homeClick} isPath={isHome} />
      <Routine onClick={routineClick} isPath={isRoutine} />
      <Calendar onClick={calendarClick} isPath={isCalendar} />
      <Mypage onClick={mypageClick} isPath={isMypage} />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 34px;
  position: absolute;
  bottom: 0;
`;
