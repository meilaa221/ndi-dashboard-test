export interface LoginRequest {
  username: string;
  password: string;
  id_daerah: number;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data?: {
    token?: string;
    user?: {
      username: string;
      id_daerah: number;
    };
  };
}

export interface ChartData {
  name: string;
  value: number;
}