import { useState, useEffect } from 'react';
import { Title } from '../components';
import styled from '@emotion/styled';
import { colors } from '../theme';
import { apiTodayLog, apiChatGpt } from '../apis';

const SuggestionContent = ({ children }) => {
  return <SuggestionContentContainer>{children}</SuggestionContentContainer>;
};

export const Routine = () => {
  const accessToken = localStorage.getItem('accessToken');

  const [postData, setPostData] = useState({
    emotion: '',
    activity: '',
    people: '',
  });

  const [datas, setDatas] = useState({
    date: new Date().toISOString().split('T')[0],
    content: '',
    suggestion: ['동네 산책', '초콜릿', '요리', '파란색'],
  });

  useEffect(() => {
    const getToday = async () => {
      const todayLogData = await apiTodayLog();
      if (todayLogData && todayLogData.length > 0) {
        const { emotion, activity, people } = todayLogData[0]; // 오늘의 첫 번째 로그 데이터
        setPostData({ emotion, activity, people });
      }
    };
  
    getToday();
  }, []);
  
  useEffect(() => {
    const postChat = async () => {
      if (postData.emotion && postData.activity && postData.people) {
        const data = await apiChatGpt(postData);
        if (data) {
          setDatas((prevDatas) => ({
            ...prevDatas,
            content: data.content, // 실제 반환되는 필드에 맞게 수정
          }));
        }
      }
    };
  
    if (postData.emotion && postData.activity && postData.people) {
      postChat();
    }
  }, [postData]);
  

  return (
    <Container>
      <ContentAllContainer>
        <ContentsContainer>
          <Title mainTitle={'오늘의 추천'} subTitle={datas.date} />
          <ContentContainer>{datas.content}</ContentContainer>
        </ContentsContainer>
        <ContentsContainer>
          <Title mainTitle={'오늘의 추천'} />
          <SuggestionContainer>
            {datas.suggestion.map((data, index) => (
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
