import axios from 'axios';
import { LoginRequest, LoginResponse } from '@/types';

const API_BASE_URL = 'http://103.185.52.135:1000/ndi';

export const authAPI = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/pre-login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Login failed' };
    }
  },
};