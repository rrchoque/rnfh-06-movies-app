import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7c5b3a50982e27ac46aac3ac08a64e4f',
    language: 'es'
  }
});