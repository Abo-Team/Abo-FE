import styled from '@emotion/styled';
import { Button, Title } from '../components';
import { colors } from '../theme';
import { apiDelUser } from '../apis';
import { useNavigate } from 'react-router-dom';

export const SecessionFirstPage = () => {
  const navigate = useNavigate();
  const yesClick = () => {
    apiDelUser();
  };

  const noClick = () => {
    navigate('/mypage');
  };
  return (
    <PageContainer>
      <ContentContainer>
        <Title mainTitle={'회원을 탈퇴하시겠습니까?'} />
        <BtnContainer>
          <Button
            backgroundColor={'#DF5151'}
            color={colors.white}
            onClick={yesClick}
          >
            예
          </Button>
          <Button
            backgroundColor={colors.gray[100]}
            color={colors.black}
            onClick={noClick}
          >
            아니요
          </Button>
        </BtnContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
