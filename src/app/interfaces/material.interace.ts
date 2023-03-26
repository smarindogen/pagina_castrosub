import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Material{
  idmateriales:String ,
  tipo: String,
  marca: String,
  talla_capacidad: String,
  descripcion: String,
  revisiones: Revision[]
}

 export interface Revision {
   fecha: Timestamp,
   observaciones: String,
   defectuoso: Boolean
 }
export interface MaterialResponse{
 materiales:Material[]
}
