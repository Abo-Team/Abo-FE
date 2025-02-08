import styled from '@emotion/styled';
import { CompleteContent } from '../components';
import { useNavigate } from 'react-router-dom';

export const CompleteLogin = () => {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate('/home');
  };
  return (
    <Container>
      <CompleteContent
        msg={'로그인이 완료되었어요!'}
        btnContent={'홈으로'}
        onClick={homeClick}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
