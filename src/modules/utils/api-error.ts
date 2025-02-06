export class ApiError<T> extends Error {
  statusCode: number;
  isOperational: boolean;
  data: T;

  constructor(statusCode: number, message: string, data: T, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.data = data;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
