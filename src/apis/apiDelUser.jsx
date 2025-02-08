import { useNavigate } from 'react-router-dom';
import { instance } from './instance';

export const apiDelUser = async () => {
  try {
    const response = await instance.delete('/user', {});
    if (response.status === 200) {
      const navigate = useNavigate();

      navigate('/secession-second');
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
    }
  }
};
