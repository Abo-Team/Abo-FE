import { instance } from './instance';

export const apiDelUser = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await instance.delete('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      console.log('성공');
      return true;
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
      return false;
    }
  }
};
