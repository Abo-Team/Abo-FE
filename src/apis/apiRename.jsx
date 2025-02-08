import { instance } from './instance';

export const apiRename = async ({ name }) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await instance.patch(
      `/user?name=${name}`,
      {}  ,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
