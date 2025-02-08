import { instance } from './instance';

export const apiTodayLog = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await instance.get('/log/list', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const logs = response.data.data;

    const today = new Date().toISOString().split('T')[0];

    const todaysLogs = logs.filter(
      (log) => log.createdAt.split('T')[0] === today
    );

    return todaysLogs;
  } catch (error) {
    console.error('데이터를 가져오는 데 실패했습니다:', error);
  }
};
