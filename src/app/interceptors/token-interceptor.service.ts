// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {AuthService} from "../services/auth.service";
// import {Auth} from "@angular/fire/auth";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {
//
//   constructor(private auth:Auth) {
//   }
//
//
//   intercept(peticionSaliente: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//       if (this.token) { // if (token!==null)
//         peticionSaliente = peticionSaliente.clone({
//           headers: peticionSaliente.headers.set('authorization', `Bearer ${token}`)
//         })
//       }
//     return next.handle(peticionSaliente)
//   }
// }
