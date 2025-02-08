import styled from '@emotion/styled';
import { colors } from '../../theme';
import { useState } from 'react';
import { Eyes } from '../../assets';

export const Inputs = ({ isLogin, placeholder, label, onChange, value }) => {
  const [isEyes, setIsEyes] = useState(false);

  const eyesClick = () => {
    setIsEyes(!isEyes);
  };

  return (
    <LabelContainer>
      <Label>{label}</Label>
      <FakeInputContainer>
        <Input
          type={isEyes ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {isLogin && (
          <FakeEyeContainer onClick={eyesClick}>
            <Eyes isPwd={isEyes} />
          </FakeEyeContainer>
        )}
      </FakeInputContainer>
    </LabelContainer>
  );
};

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.black};
`;

const Input = styled.input`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};
  height: 45px;
  width: 100%;
  padding-left: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: ${colors.main[200]} 1.5px solid;
  border-radius: 10px;
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray[200]};
  }
`;

const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

const FakeInputContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;

const FakeEyeContainer = styled.div`
  width: 18px;
  height: 15px;
  position: absolute;
  right: 24px;
  top: 16px;
`;
