import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import {API_KEY} from "../consts";

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.exchangerate.host/',
  responseType: 'json',
  // headers: {
  //   "apikey": API_KEY
  // }
});

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then((response) => response as unknown as R);

export { get };
