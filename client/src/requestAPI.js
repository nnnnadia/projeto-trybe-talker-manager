import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000',
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const clearData = async () => {
  await api.delete('/talker');
};

export const restartData = async () => {
  await api.post('/talker/restart');
}

export default api;
