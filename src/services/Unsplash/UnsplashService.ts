import axios, { AxiosInstance } from 'axios';

class UnsplashService {
  private instance: AxiosInstance;
  private baseUrl = 'https://api.unsplash.com/';
  private UNSPLASH_ACESS_KEY = 'Rgugspn1tJksSX5QH7haUaq0VjZwQMIZgfh70rlvtsc';

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseUrl,
      params: {
        client_id: this.UNSPLASH_ACESS_KEY,
      },
    });
  }
}

export default UnsplashService;
