import { useNavigate } from 'react-router-dom';
import { instance } from './instance';

export const apiSignIn = async ({ email, password }) => {
  try {
    const response = await instance.post('/auth/sign-in', {
      email,
      password,
    });
    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data.data;
      console.log('성공');

      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      return true;
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
      return false;
    }
  }
};
