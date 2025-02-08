import { useNavigate } from 'react-router-dom';
import { instance } from './instance';

export const apiRename = async ({ name }) => {
  try {
    const response = await instance.patch('/user', { name });
    if (response.status === 200) {
      const navigate = useNavigate();

      navigate('/mypage');
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
    }
  }
};
