import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000',
});

export const requestData = async (endpoint) => {
  try {
    const { data, status } = await api.get(endpoint);
    return { data, status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
};

export const clearData = async () => {
  await api.delete('/talker');
};

export const restartData = async () => {
  await api.post('/talker/restart');
}

export const postData = async (endpoint, newData, config) => {
  try {
    const { data, status } = await api.post(endpoint, newData, config);
    return { data, status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
}

export const putData = async (endpoint, newData, config) => {
  try {
    const { data, status } = await api.put(endpoint, newData, config);
    return { data, status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
}

export default api;
