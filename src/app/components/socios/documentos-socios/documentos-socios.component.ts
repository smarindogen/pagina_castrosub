import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SociosService} from "../../../services/socios.service";
import {FileValidator} from "ngx-material-file-input";
import {DocSocio} from "../../../interfaces/documentoSocio.interface";


@Component({
  selector: 'documentos-socios',
  templateUrl: './documentos-socios.component.html',
  styleUrls: ['./documentos-socios.component.css']
})
export class DocumentosSociosComponent implements OnInit {

  form = new FormGroup({
    ndoc: new FormControl('', {
      validators: [Validators.required]
    }),
    tdoc: new FormControl('', {
      validators: [Validators.required]
    }),
    file: new FormControl('', {
      validators: [Validators.required, FileValidator.maxContentSize(104857600)] //100 MB
    })

  });


  constructor(public dialogRef: MatDialogRef<DocumentosSociosComponent>,
              @ Inject(MAT_DIALOG_DATA) public data: number,
              private readonly socioService: SociosService
  ) {
  }

  color:string="primary";
  docs: DocSocio[] | undefined
  tdocumentos = ["Titulacion", "Seguro", "Documentacion"]
  step= -1;

  ngOnInit() {
      this.socioService.findAllDocs(this.data).subscribe((docs)=>{
        this.docs=docs.docsSocio
        console.log(docs.docsSocio)
      })
  }


  guardarDocumento(form: any) {
    if (form.valid) {
      let formData = new FormData()
      // let ext = form.value.file._files[0].split('.').last
      formData.append("file",form.value.file._files[0])
      formData.append("idsocios",this.data.toString())
      formData.append("ndoc",form.value.ndoc)
      formData.append("tdoc",form.value.tdoc)
      this.socioService.saveDoc(formData)
        .subscribe(() => {
          this.form.reset()
          this.setStep(-1)
          this.ngOnInit()})
    } else this.form.markAllAsTouched()
  }
  verDocumento(documento:DocSocio) {
    this.socioService.findOneDoc(documento).subscribe(url=> {
      console.log(url)
      let downloadURL = window.URL.createObjectURL(url);
      window.open(downloadURL, 'window')
    })

  }

  dltDoc(doc: DocSocio) {
    console.log(doc)
    this.socioService.deleteDoc(doc).subscribe(()=>{
      this.ngOnInit()
    })
  }

  setStep(number: number) {
    this.step=number
  }
}

