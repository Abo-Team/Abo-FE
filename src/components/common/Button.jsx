import styled from '@emotion/styled';

export const Button = ({ children, backgroundColor, color }) => {
  return (
    <BtnContainer color={color} backgroundColor={backgroundColor}>
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
