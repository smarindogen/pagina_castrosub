import {tap} from "rxjs";
import {Material, MaterialResponse} from "../interfaces/material.interace";
import {Injectable} from "@angular/core";
import {Socio} from "../interfaces/socios.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DocSocio} from "../interfaces/documentoSocio.interface";


@Injectable({
  providedIn: 'root'
})
export class MaterialServices {

  constructor(private http: HttpClient) {
  }
  token: string = ""


//lista materiales

  findAllMaterial() {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get<MaterialResponse>("/materiales",
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(data => {
      })
    )
  }

//guardar materiales
  saveMaterial(material: Material) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.post<Material>("/materiales", material,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(data => {
      })
    )
  }
//   addMaterial(material: Material){
//     console.log(material);
//     let materialRef = collection(this.firestore, 'inventario');
//     return addDoc(materialRef, material);
//   }
  //actualizar material
  updateMaterial(material: Material) {
    console.log(material)
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.put<Socio>("/materiales", material,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(data => {
      })
    )
  }
  //eliminar material
  // deleteMaterial(material: Material) {
  //   const materialDocRef = doc(this.firestore, `inventario/`+material.id);
  //   return deleteDoc(materialDocRef);
  // }

  findOneImg(idmateriales:number, idimg:number) {
    const params = new HttpParams();
    params.appendAll({'idmateriales': idmateriales, 'idimg':idimg})
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.get("/materiales/imagen",
      {headers: {authorization: `Bearer ${this.token}`},responseType:'blob', params:{'idmateriales': idmateriales, 'idimg':idimg}}).pipe(
      tap(data => {

      })
    )}
  saveImg(data:any) {
    this.token = JSON.parse(<string>localStorage.getItem("token"))
    return this.http.post<DocSocio>("/materiales/imagen", data,
      {headers: {authorization: `Bearer ${this.token}`}}).pipe(
      tap(data => {
      })
    )
  }
}
