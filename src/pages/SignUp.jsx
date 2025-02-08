import styled from '@emotion/styled';
import { Button, Inputs, Title } from '../components/common';
import { ImgInput } from '../components';
import { colors } from '../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiSignUp } from '../apis';

export const SignUp = () => {
  const [datas, setDatas] = useState({
    profileImg: '',
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleImgChange = (url) => {
    setDatas((prev) => ({
      ...prev,
      profileImg: url,
    }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      email: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      password: value,
    }));
  };

  const signUpClick = async () => {
    try {
      await apiSignUp({
        email: datas.email,
        name: datas.name,
        password: datas.password,
        imgUrl: datas.profileImg,
      });
      navigate('/complete-create-user');
    } catch (error) {
      console.log('회원가입 실패:', error);
    }
  };

  console.log(datas);

  return (
    <SignUpContainer>
      <BtnContainer>
        <ProfileContainer>
          <TitleContainer>
            <Title mainTitle={'회원가입'} />
            <ImgInput onImageUpload={handleImgChange} />
          </TitleContainer>
          <InputContainer>
            <Inputs
              label={'이름'}
              placeholder={'이름을 입력해주세요.'}
              value={datas.name}
              onChange={handleNameChange}
            />
            <Inputs
              label={'이메일'}
              placeholder={'이메일을 입력해주세요.'}
              value={datas.email}
              onChange={handleEmailChange}
            />
            <Inputs
              label={'비밀번호'}
              placeholder={'비밀번호를 입력해주세요.'}
              isLogin={true}
              value={datas.password}
              onChange={handlePasswordChange}
            />
          </InputContainer>
        </ProfileContainer>
        <Button
          backgroundColor={colors.main[200]}
          color={colors.white}
          onClick={signUpClick}
        >
          가입완료
        </Button>
      </BtnContainer>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 51px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  width: 100vw;
  padding: 0 45px;
  margin-top: 40px;
`;
