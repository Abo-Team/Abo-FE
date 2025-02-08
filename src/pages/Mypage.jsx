import styled from '@emotion/styled';
import { Title } from '../components';
import { colors } from '../theme';
import { useEffect, useState } from 'react';
import { apiDelUser, apiGetUserProfile } from '../apis';
import { useNavigate } from 'react-router-dom';

export const Mypage = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([
    {
      imgUrl: '',
      name: '',
      email: '',
    },
  ]);

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await apiGetUserProfile(accessToken);
      if (profileData) {
        setDatas([profileData]);
      }
    };

    fetchProfile();
  }, [accessToken]);

  const editProfile = () => {
    navigate('/edit-profile');
  };

  const delUserClick = () => {
    navigate('/secession-first');
  };

  const logOutClick = () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    navigate('/');
  };

  return (
    <MypageContainer>
      <TitleContainer>
        <Title mainTitle={'프로필'} />
        <NavContentContainer>
          <ContentAllContainer>
            <ProfileContainer>
              <Profile imgUrl={datas[0].imgUrl}></Profile>
              <Title mainTitle={datas[0].name} subTitle={datas[0].email} />
            </ProfileContainer>
            <ContentContainer>
              <NavContent onClick={editProfile}>프로필 편집하기</NavContent>
            </ContentContainer>
          </ContentAllContainer>
          <NavContainer>
            <Nav onClick={logOutClick}>로그아웃</Nav>
            <Nav onClick={delUserClick}>회원탈퇴</Nav>
          </NavContainer>
        </NavContentContainer>
      </TitleContainer>
    </MypageContainer>
  );
};

const NavContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 280px;
`;

const Nav = styled.button`
  background-color: transparent;
  width: 100%;
  height: 32px;
  border-radius: 12px;
  border: 1.5px solid ${colors.gray[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  color: #df5151;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: start;
`;

const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 30px 0 30px;
`;

const ContentAllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const NavContent = styled.div`
  font-size: 12px;
  font-weight: 200;
`;

const Line = styled.div`
  width: 94%;
  height: 1px;
  background-color: ${colors.main[200]};
`;

const Profile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid ${colors.main[200]};
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 12px;
  border: 1px solid ${colors.main[200]};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 12px;
  background-color: ${colors.main[100]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding-left: 20px;
`;
