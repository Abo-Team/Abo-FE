import styled from '@emotion/styled';
import { colors } from '../../theme';

export const Title = ({ mainTitle, subTitle }) => {
  return (
    <TitleContainer>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

const MainTitle = styled.div`
  font-family: 'KHNPHDotfR';
  font-size: 18px;
  font-weight: 400;
  color: ${colors.black};
`;

const SubTitle = styled.div`
  font-family: 'KHNPHUotfR';
  font-size: 10px;
  font-weight: 400;
  color: ${colors.black};
`;
