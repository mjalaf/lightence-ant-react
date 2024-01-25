import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers[`Authorization`] = `Bearer ${readToken()}`;
  //config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };

  return config;
});

httpApi.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error: AxiosError) {
    // Do something with response error
    if (error.response?.status === 401) {
      console.log('unauthorized, logging out ...');
      //    auth.logout();
      //   router.replace('/auth/login');
    }
    throw new ApiError<ApiErrorData>('');
  },
);
export interface ApiErrorData {
  message: string;
}
