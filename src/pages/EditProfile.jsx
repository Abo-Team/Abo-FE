import { useEffect, useState } from 'react';
import { Button, ExitTitle, ImgInput, Inputs } from '../components';
import styled from '@emotion/styled';
import { colors } from '../theme';
import { apiGetUserProfile, apiRename } from '../apis';
import { data, useNavigate } from 'react-router-dom';

export const EditProfile = () => {
  const [datas, setDatas] = useState({
    name: '',
  });

  const accessToken = localStorage.getItem('accessToken');
  

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await apiGetUserProfile(accessToken);
      if (profileData) {
        setDatas({
          name: profileData.name,
        });
      }
    };

    fetchProfile();
  }, [accessToken]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setDatas({
      ...datas,
      name: value,
    });
  };
  console.log(datas);

  const navigate = useNavigate();

  const editClick = async () => {
    try {
      const data = await apiRename({ name: datas.name });
      if (data) {
        navigate('/mypage');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ContentsContainer>
        <HeaderContainer>
          <ExitTitle>프로필 편집</ExitTitle>
          <ContentContainer>
            <ImgContainer></ImgContainer>
            <Inputs
              placeholder={'이름을 입력해주세요.'}
              label={'이름'}
              value={datas.name}
              onChange={handleNameChange}
            />
          </ContentContainer>
        </HeaderContainer>
        <Button
          backgroundColor={colors.main[200]}
          color={colors.white}
          onClick={editClick}
        >
          완료
        </Button>
      </ContentsContainer>
    </>
  );
};

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main[100]};
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 70px 30px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;
