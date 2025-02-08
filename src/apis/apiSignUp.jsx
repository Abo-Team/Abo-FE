import { useNavigate } from 'react-router-dom';
import { instance } from './instance';

export const apiSignUp = async ({ email, name, password, imgUrl }) => {
  try {
    const response = await instance.post('/auth/sign-up', {
      email,
      name,
      password,
      imgUrl,
    });

    if (response.status === 201) {
      const navigate = useNavigate();
      console.log('회원가입 성공');
      navigate('/complete-create-user');
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
    }
  }
};
