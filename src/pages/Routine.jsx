import { useState } from 'react';
import { Title } from '../components';
import styled from '@emotion/styled';
import { colors } from '../theme';

const SuggestionContent = ({ children }) => {
  return <SuggestionContentContainer>{children}</SuggestionContentContainer>;
};

export const Routine = () => {
  const [datas, setDatas] = useState([
    {
      date: '2025.02.08',
      content:
        '아보팀 님 오늘의 기분은 평범, 짜증 이고 친구와 함께 공부 활동을 하셨네요! 평범하고 짜증나는 기분을 환기시키기 위해 오늘 동네 산책은 어떨까요? 초콜릿과 같은 기분이 좋아지는 음식도 좋을 것 같아요. 오늘 감정에 맞는 취미로는 요리를 추천드릴게요!',
      suggestion: ['동네 산책', '초콜릿', '요리', '파란색'],
    },
  ]);

  return (
    <Container>
      <ContentAllContainer>
        <ContentsContainer>
          <Title mainTitle={'오늘의 추천'} subTitle={datas[0].date} />
          <ContentContainer>{datas[0].content}</ContentContainer>
        </ContentsContainer>
        <ContentsContainer>
          <Title mainTitle={'오늘의 추천'} />
          <SuggestionContainer>
            {datas[0].suggestion.map((data, index) => (
              <SuggestionContent key={index}>{data}</SuggestionContent>
            ))}
          </SuggestionContainer>
        </ContentsContainer>
      </ContentAllContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 60px;
  padding: 0 30px;
`;

const ContentAllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;

const SuggestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SuggestionContentContainer = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: ${colors.main[100]};
  padding-left: 20px;
  display: flex;
  align-items: center;
  color: ${colors.main[200]};
  font-size: 12px;
  font-weight: 400;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 181px;
  border-radius: 10px;
  background-color: ${colors.main[200]};
  padding: 20px;
  overflow: scroll;
  font-size: 12px;
  color: ${colors.white};
  line-height: 20px;
`;
