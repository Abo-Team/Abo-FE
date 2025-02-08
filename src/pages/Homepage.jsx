import styled from '@emotion/styled';

export const HomePage = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  return (
    <Container>
      <Title>오늘의 감정 기록하기</Title>
      <DateText>{formattedDate}</DateText>
      
      <Section>
        <SectionTitle>오늘의 감정</SectionTitle>
        <EmotionGrid>
          {['감정', '감정', '감정', '감정', '감정', '감정', '감정', '감정'].map((emotion, index) => (
            <EmotionItem key={index}>
              <EmoticonCircle>😊</EmoticonCircle>
              <EmotionText>{emotion}</EmotionText>
            </EmotionItem>
          ))}
        </EmotionGrid>
      </Section>

      <Section>
        <SectionTitle>오늘의 활동</SectionTitle>
        <ActivityGrid>
          {['수면', '영화', '공부', '데이트', '휴식'].map((activity, index) => (
            <ActivityItem key={index}>
              <ActivityCircle />
              <ActivityText>{activity}</ActivityText>
            </ActivityItem>
          ))}
        </ActivityGrid>
      </Section>

      <Section>
        <SectionTitle>함께한 사람</SectionTitle>
        <PeopleGrid>
          {['가족', '친구', '연인', '반려동물'].map((person, index) => (
            <PersonItem key={index}>
              <PersonCircle />
              <PersonText>{person}</PersonText>
            </PersonItem>
          ))}
        </PeopleGrid>
      </Section>

      <RecordButton>감정 기록 완료하기</RecordButton>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

const Section = styled.section`
  margin-bottom: 32px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

const EmotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const EmotionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const EmoticonCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const EmotionText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ActivityCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ddd;
`;

const ActivityText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const PersonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const PersonCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ddd;
`;

const PersonText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const RecordButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #6b8e6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
`;
