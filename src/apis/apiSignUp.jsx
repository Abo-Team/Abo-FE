import { instance } from "./instance";

export const apiSignUp = async ({ email, name, password, imgUrl }) => {
  try {
    const response = await instance.post('/auth/sign-up', {
      email,
      name,
      password,
      imgUrl,
    });

    if (response.status === 201) {
      console.log('회원가입 성공');
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('회원가입 실패:', error);
    return false;
  }
};
