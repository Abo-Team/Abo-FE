import styled from '@emotion/styled';
import { exitBtn } from '../../assets';

export const ExitTitle = ({children}) => {
  return (
    <Container>
      <ContentContainer>
        <img src={exitBtn} alt="exitBtn" />
        <Title>{children}</Title>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 0 141px 0 45px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 90px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
