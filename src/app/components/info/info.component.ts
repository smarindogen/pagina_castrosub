import { Component, OnInit } from '@angular/core';
import {Documento} from "../../interfaces/documento.interface";
import {DocumentoServices} from "../../services/documento.services";
import {Socio} from "../../interfaces/socios.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileValidator} from "ngx-material-file-input";




@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  socioActual :Socio = JSON.parse(<string>localStorage.getItem("socioActual")).socio[0]

  form = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.required]
    }),
    tipo: new FormControl('', {
      validators: [Validators.required]
    }),
    file: new FormControl('', {
      validators: [Validators.required, FileValidator.maxContentSize(104857600)] //100 MB
    })
  });
  color:string="primary";
  docs:Documento[]=[]
  tipoDocs:tipoDoc[]=[
    {nombre:'Actas', descripcion:'Lista de actas de las reuniones de club'},
    {nombre:'Seguro', descripcion:'Lista de seguros del club'},
    {nombre:'Directiva', descripcion:'Documentos del club'},
    {nombre:'Hacienda', descripcion:'Documentos de hacienda'},
    {nombre:'Administraciones', descripcion:'Ordenanzas, leyes...'},
    {nombre:'Socios', descripcion:'Documentos para los socios (Normas, inscripciones, LOPD)'},
    {nombre:'Otros', descripcion:'Otros documentos'},

  ]

  constructor(private documentosServices: DocumentoServices) {
  }

  ngOnInit() {
    this.documentosServices.findAll().subscribe((docs)=>{
      this.docs=docs.documentos
      console.log(docs.documentos)
    })
  }


  guardarDocumento(form: any) {
    if (form.valid) {
      let formData = new FormData()
      formData.append("file",form.value.file._files[0])
      formData.append("tipo",form.value.tipo)
      formData.append("nombre",form.value.nombre)
      this.documentosServices.save(formData)
        .subscribe(() => {
          this.ngOnInit()})
    } else this.form.markAllAsTouched()
  }
  verDocumento(documento:Documento) {
    this.documentosServices.findOne(documento).subscribe(url=> {
      let downloadURL = window.URL.createObjectURL(url);
      window.open(downloadURL, '_blank')
    })

  }

  dltDoc(doc: Documento) {
    console.log(doc)
    this.documentosServices.remove(doc).subscribe(()=>{
      this.ngOnInit()
    })
  }
}

interface tipoDoc {
  nombre:string
  descripcion:string,
}

