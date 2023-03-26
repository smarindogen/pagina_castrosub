import {tap} from "rxjs";
import {Documento, Documentos} from "../interfaces/documento.interface";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DocumentoServices {

  token: string = ""

  constructor(private http: HttpClient) {
  }

//lista documentos

  findAll() {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get<Documentos>("/docs",
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }


//guardar doc
  save(data:any) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.post<Documento>("/docs", data,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }

  findOne(doc:Documento) {
    const params = new HttpParams();
    params.appendAll({'iddocs': doc.iddocs, 'tipo':doc.tipo, 'nombre':doc.nombre})
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get("/docs/ver",
      {headers: {authorization: `Bearer ${this.token}`},responseType:'blob', params:{'iddocs': doc.iddocs, 'tipo':doc.tipo, 'nombre':doc.nombre}}).pipe(
      tap(() => {
      })
    )}
  remove(doc:Documento) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.delete("/docs",
      {body: doc, headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }


}
