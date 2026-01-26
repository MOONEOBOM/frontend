export type ApiResponse<T> = {
  success: boolean;
  code: string;
  message: string;
  data: T;
};

export type ApiErrorResponse = {
  success: false;
  code: string;
  message: string;
  timestamp: string;
  path: string;
  errors?: {
    field: string;
    reason: string;
  }[];
};
