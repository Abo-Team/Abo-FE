import styled from '@emotion/styled';
import { colors } from '../theme/colors';
import Icons from '../components/common/Face';
import { Component } from 'react';
import Hobby from '../components/common/Hobby';
import Person from '../components/common/Person';

export const HomePage = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

const iconlist = [
  {Component: Icons.Normal},
  {Component: Icons.Best},
  {Component: Icons.Sad},
  {Component: Icons.Depress},
  {Component: Icons.Angry},
  {Component: Icons.Excite},
  {Component: Icons.Irritate},
  {Component: Icons.Love},
];

const hobbylist = [
  {Component: Hobby.Shopp},
  {Component: Hobby.Movie},
  {Component: Hobby.Study},
  {Component: Hobby.Date},
  {Component: Hobby.House},
]

const personlist = [
  {Component: Person.Family},
  {Component: Person.Friend},
  {Component: Person.Lover},
  {Component: Person.Pet},
]

  return (
    <Container>
      <Title>오늘의 감정 기록하기</Title>
      <DateText>{formattedDate}</DateText>
      
      <SectionTitle>오늘의 감정</SectionTitle>
      <Section>
      <EmotionGrid>
        {['평범함', '최고', '슬픔', '우울함', '화남', '설렘', '짜증남', '사랑'].map((emotion, index) => {
          const { Component } = iconlist[index]; // 🎯 인덱스를 활용해 하나씩 매칭!
          return (
            <EmotionItem key={index}>
              <Component size={48} /> {/* ✅ SVG 아이콘 하나씩만 출력 */}
              <EmotionText>{emotion}</EmotionText>
            </EmotionItem>
          );
        })}
      </EmotionGrid>
      </Section>

      <SectionTitle>오늘의 활동</SectionTitle>
      <Section>
        <ActivityGrid>
          {['쇼핑', '영화', '공부', '데이트', '집콕'].map((activity, index) => {
            const { Component } = hobbylist[index];
            return (  // ✅ return 추가 (중요!)
              <ActivityItem key={index}>
                <Component />  {/* ✅ 아이콘 출력 */}
                <ActivityText>{activity}</ActivityText>
              </ActivityItem>
            );
          })}
        </ActivityGrid>
      </Section>


      <SectionTitle>함께한 사람</SectionTitle>
      <Section>
        <PeopleGrid>
          {['가족', '친구', '연인', '반려동물'].map((person, index) => {
            const { Component } = personlist[index];
            return (
            <PersonItem key={index}>
              <Component />
              <PersonText>{person}</PersonText>
            </PersonItem>
          );
        })}
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
  min-height: 90vh;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: ${colors.black};
  margin-bottom: 24px;
`;

const Section = styled.section`
  margin-bottom: 32px;
  background-color: ${colors.main[100]};
  padding: 20px;
  border-radius: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 16px;
`;

const EmotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  color: ${colors.black};
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
  color: ${colors.black};
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
  color: ${colors.black};
`;

const RecordButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #6b8e6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 5px;
`;
