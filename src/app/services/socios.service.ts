import {Socio, SociosResponse} from "../interfaces/socios.interface";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DocSocio, DocsSocio} from "../interfaces/documentoSocio.interface";


@Injectable({
  providedIn: 'root'
})

export class SociosService {
  token: string = ""

  constructor( private http: HttpClient) {
  }

  findAllSocios() {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get<SociosResponse>("/socios",
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }

//un socio
  findOneSocio(email:string): Observable<Socio> {
    const params = new HttpParams();
    params.appendAll({'email': email})
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get<Socio>("/socios/"+email,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      }))
  }

//guardar socio

  saveSocio(socio: Socio) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.post<Socio>("/socios", socio,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }

  //actualizar socio
  updateSocio(socio: Socio) {
    console.log(socio)
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.put<Socio>("/socios", socio,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }

  saveDoc(data:any) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.post<DocSocio>("/docsocios", data,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }
  findAllDocs(idsocios:number) {
    const params = new HttpParams();
    params.appendAll({'idsocios': idsocios})
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get<DocsSocio>("/docsocios/" + idsocios,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }
  findOneDoc(doc:DocSocio) {
    const params = new HttpParams();
    params.appendAll({'idsocios': doc.idsocios, 'ndoc':doc.ndoc, 'tdoc':doc.tdoc})
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get("/docsocios",
      {headers: {authorization: `Bearer ${this.token}`},responseType:'blob', params:{'idsocios': doc.idsocios, 'ndoc':doc.ndoc, 'tdoc':doc.tdoc}}).pipe(
        tap(() => {
        })
      )}
  deleteDoc(doc:DocSocio) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.delete("/docsocios",
      {body: doc, headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(() => {
      })
    )
  }
}


