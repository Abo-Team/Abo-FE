import styled from '@emotion/styled';
import { plus } from '../../assets';
import { useRef, useState } from 'react';
import { colors } from '../../theme';

export const ImgInput = ({ onImageUpload }) => {
  const imgRef = useRef();

  const imgBtnClick = () => {
    imgRef.current?.click();
  };

  const handleChange = () => {
    const file = imgRef.current?.files?.[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      onImageUpload(newUrl);
    }
  };

  return (
    <>
      <FakeImgContainer type="file" ref={imgRef} onChange={handleChange} />
      <ImgContainer onClick={imgBtnClick}>
        <img src={plus} alt="plus" />
      </ImgContainer>
    </>
  );
};

const FakeImgContainer = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main[100]};
`;
