import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class ErrorsInterceptorService implements HttpInterceptor {

  constructor( private loginService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap(
        () => {

        },
        error => { //ESTO SOLO SE LLAMA SI SE PRODUCE/RECIBE UN ERROR EN EL OBSERVABLE
          if (error instanceof HttpErrorResponse) { //COMPROBAR SI E ES DEL TIPO HTTPERRORRESPONSE
            //PARA COMPROBAR SI SON ERRORES DE HTTP
            switch (error.status) {
              case 400:
                //this.toast.error("ERROR 400: Revisa la solicitud de los datos")
                break;
              case 401:
                this.loginService.logout()
                break;
              case 403:
                //No tienes permiso para acceder aquí
                this.loginService.logout()
                break;
              case 404:
                //this.toast.error("EROR 404 --> No se ha encontrado el recurso solicitado");
                break;
              case 500:
                ///this.toast.error("ERROR 500 -->" + error.error.msg)
                break;
            }
          }
        }
      ))
  }
}
