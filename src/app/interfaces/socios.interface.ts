
  export class Socio{
    idsocios: Number = 0
    nombre: String =""
    apellidos: String =""
    dni: String =""
    fnacimiento: Number = 0
    tlf: Number =0
    direccion: String =""
    cargo: String=""
    fseguro: String=""
    actividad: String=""
    titulacion: String=""
    email: String=""
    inscripcion: Boolean =true
  }

  export interface SociosResponse{
  socios: Socio[]
  }
