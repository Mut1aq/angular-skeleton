export interface HttpError {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: SubError;
}

interface SubError {
  errors?: string[];
  error?: string;
  message?: string;
}
