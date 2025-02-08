import styled from '@emotion/styled';
import { complete } from '../../assets';
import { Button } from './Button';
import { colors } from '../../theme';

export const CompleteContent = ({ msg, btnContent, onClick }) => {
  return (
    <CompleteContentContainer>
      <ContentContainer>
        <img src={complete} alt="complete" />
        <Msg>{msg}</Msg>
      </ContentContainer>
      <Button
        backgroundColor={colors.main[200]}
        color={colors.white}
        onClick={onClick}
      >
        {btnContent}
      </Button>
    </CompleteContentContainer>
  );
};

const CompleteContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 240px;
  align-items: center;
`;

const Msg = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
