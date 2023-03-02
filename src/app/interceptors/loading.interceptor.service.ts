import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  private numPeticiones = 0;

  constructor(private spinner: NgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.numPeticiones == 0)
      this.spinner.show("mySpinner", {
        type: "line-scale-party",
        size: "large",
        bdColor: "rgba(0, 0, 0, 1)",
        color: "white",
        template:
          "<img src='../../assets/hnet_image.gif' />",
      })
    this.numPeticiones++;

    return next.handle(req)
      //ENTRADA --> DE LA PETICIÓN DE SALIDA QUIERO QUE ME RECUPERES LA ENTRADA (LA RESPUESTA!!!)
      //COMUNICACIÓN DEL BACK CON ANGULAR
      .pipe(finalize(() => {
        this.numPeticiones--;
        if (this.numPeticiones == 0)
          this.spinner.hide()

      }))
  }
}
