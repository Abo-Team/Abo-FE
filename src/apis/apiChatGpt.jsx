export const apiChatGpt = async ({ emotion, activity, people }) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await instanc.post(
      '/chat-gpt',
      {
        emotion,
        activity,
        people,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      console.log('성공');
      return response.data; // 데이터 구조를 확인해 제대로 반환하고 있는지 확인
    }
  } catch (error) {
    console.log('error');
  }
};
