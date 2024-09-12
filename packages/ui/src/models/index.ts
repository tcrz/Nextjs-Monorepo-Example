export interface ApiResponse<T> {
    message: string;
    code: string | number | null;
    data: T;
  }