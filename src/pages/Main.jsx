import styled from '@emotion/styled';
import { Logo } from '../assets';
import { Button } from '../components/common';
import { colors } from '../theme';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login');
  };

  const signUpClick = () => {
    navigate('/signup');
  };
  return (
    <MainAllContainer>
      <MainContainer>
        <Logo />
        <BtnContainer>
          <Button
            backgroundColor={colors.main[200]}
            color={colors.white}
            onClick={signUpClick}
          >
            회원가입
          </Button>
          <Button
            backgroundColor={colors.main[100]}
            color={colors.main[200]}
            onClick={loginClick}
          >
            로그인
          </Button>
        </BtnContainer>
      </MainContainer>
    </MainAllContainer>
  );
};

const MainAllContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 260px;
`;

const MainContainer = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  gap: 270px;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
