import styled from '@emotion/styled';
import { Button, Title } from '../components';
import { colors } from '../theme';

export const SecessionSecondPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title mainTitle={'회원 탈퇴가 완료되었습니다'} />
        <Button backgroundColor={colors.main[200]} color={colors.white}>
          처음으로
        </Button>
      </ContentContainer>
    </PageContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 325px;
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 360px 30px 0 30px;
`;
