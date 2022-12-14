import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOST}`,
});

export const requestData = async (endpoint, config) => {
  try {
    const { data, status } = await api.get(endpoint, config);
    return { data, status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
};

export const clearData = async (endpoint, config) => {
  try {
    const { data, status } = await api.delete(endpoint, config);
    return { data, status };
  } catch (err) {
    return { data: err.response.data, status: err.response.status };
  }
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
