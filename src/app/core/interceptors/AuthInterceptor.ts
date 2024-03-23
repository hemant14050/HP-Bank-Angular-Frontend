import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('/login') || req.url.includes('/register')) { 
        return next.handle(req);
    }
        
    // Get the auth token from the service.
    const authToken = this.auth.getToken();
    // console.log("I am here ---", authToken);
    // console.log(`Bearer ${authToken}`);
    
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}