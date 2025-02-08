import styled from '@emotion/styled';
import { Button, Inputs } from '../components/common';
import { colors } from '../theme';
import { useState } from 'react';
import { Logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { apiSignIn } from '../apis';

export const Login = () => {
  const [datas, setDatas] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

  const signUpClick = () => {
    navigate('/signup');
  };

  const loginClick = async () => {
    try {
      const result = await apiSignIn({
        email: datas.email,
        password: datas.password,
      });

      if (result) {
        navigate('/complete-login');
      }
    } catch (error) {
      console.log('로그인 실패:', error);
    }
  };
  return (
    <LoginContainer>
      <ContentsContainer>
        <ContentContainer>
          <Logo />
          <InputContainer>
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
        </ContentContainer>
        <BtnContainer>
          <Button
            backgroundColor={colors.main[200]}
            color={colors.white}
            onClick={loginClick}
          >
            로그인
          </Button>
          <SignContainer>
            <SignContent>계정이 없으신가요?</SignContent>
            <SignNav onClick={signUpClick}>가입하기</SignNav>
          </SignContainer>
        </BtnContainer>
      </ContentsContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 316px;
  margin-top: 180px;
`;

const SignNav = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.main[200]};
  cursor: pointer;
`;

const SignContent = styled.div`
  font-family: 'KHNPHUotfR';
  font-size: 16px;
  font-weight: 200;
  color: ${colors.black};
`;

const SignContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  align-items: center;
`;
