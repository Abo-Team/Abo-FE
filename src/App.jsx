import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './theme';
import styled from '@emotion/styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <MainContent>
        <RouterProvider router={Router} />
      </MainContent>
      <BottomNav>
        <NavItem>
          <NavIcon>🏠</NavIcon>
        </NavItem>
        <NavItem>
          <NavIcon>🌱</NavIcon>
        </NavItem>
        <NavItem>
          <NavIcon>📅</NavIcon>
        </NavItem>
        <NavItem>
          <NavIcon>👤</NavIcon>
        </NavItem>
      </BottomNav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-bottom: 60px;
`;

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const NavIcon = styled.span`
  font-size: 1.5rem;
`;

const NavText = styled.span`
  font-size: 0.8rem;
  color: #666;
`;
