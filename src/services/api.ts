import axios, {
     AxiosError,
     HttpStatusCode,
     InternalAxiosRequestConfig,
} from 'axios';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';

export const api = axios.create({
     baseURL: process.env.NEXT_PUBLIC_baseUrl,
     headers: { 'Content-Type': 'application/json' },
});
const apiInterceptor = async (request: InternalAxiosRequestConfig) => {
     const cookieStore = cookies();
     const token = (await cookieStore).get('token');
     if (token) {
          request.headers.Authorization = `Bearer ${token.value}`;
     }
     return request;
};
const errorInterceptor = async (axiosError: AxiosError) => {
     if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
          const router = useRouter();
          router.push('/auth/login');
          return Promise.reject(axiosError);
     }

     return Promise.reject(axiosError);
};
// Request interceptors
api.interceptors.request.use(apiInterceptor);

// Response interceptors
api.interceptors.response.use((res) => res, errorInterceptor);
