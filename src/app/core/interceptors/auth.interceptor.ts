// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token'); // Adjust based on how you store the token

  console.log('Auth Interceptor: Checking for token', authToken);
  if (!authToken) {
    return next(req); // No token, proceed without modification
  }

  // Requests are immutable; you must clone to modify
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request to the next handler
  return next(authReq);
};
