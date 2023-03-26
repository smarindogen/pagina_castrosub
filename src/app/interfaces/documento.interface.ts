
export interface Documento{
  iddocs:number ,
  tipo: string,
  nombre: string
  file: File

}

export interface Documentos{
  documentos: Documento[]
}
