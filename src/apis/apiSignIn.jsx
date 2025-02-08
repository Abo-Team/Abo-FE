import { useNavigate } from 'react-router-dom';
import { instance } from './instance';

export const apiSignIn = async ({ email, password }) => {
  try {
    const response = await instance.post('/auth/sign-in', {
      email,
      password,
    });
    if (response.status === 200) {
      const { access_token, refresh_token } = response.data;

      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('access_token', access_token);
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
    }
  }
};
