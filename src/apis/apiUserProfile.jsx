import { instance } from './instance';

export const apiGetUserProfile = async (access_token) => {
  try {
    const response = await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      console.log(response.data.data);
      return response.data.data;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    if (error.response) {
      console.log('error');
    }
  }
};
