import styled from '@emotion/styled';
import { CompleteContent } from '../components';
import { useNavigate } from 'react-router-dom';

export const CompleteCreateUser = () => {
  const navigate = useNavigate();

  const startClick = () => {
    navigate('/');
  };
  return (
    <Container>
      <CompleteContent
        msg={'계정 생성을 완료했어요!'}
        btnContent={'처음으로'}
        onClick={startClick}
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
