import styled from '@emotion/styled';
import { Button, Inputs, Title } from '../components/common';
import { ImgInput } from '../components/common/ImgInput';
import { colors } from '../theme';
import { useState } from 'react';

export const SignUp = () => {
  const [datas, setDatas] = useState([
    {
      profileImg: '',
      name: '',
      email: '',
      password: '',
    },
  ]);

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
        <Button backgroundColor={colors.main[200]} color={colors.white}>
          가입완료
        </Button>
      </BtnContainer>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    margin-top: 30px;
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 31px;
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  width: 316px;
  margin-top: 40px;
`;
