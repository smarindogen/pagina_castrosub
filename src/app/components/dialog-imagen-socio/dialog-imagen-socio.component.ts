import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {MaterialServices} from "../../services/material.services";


@Component({
  selector: 'app-dialog-imagen-socio',
  templateUrl: './dialog-imagen-socio.component.html',
  styleUrls: ['./dialog-imagen-socio.component.css']
})
export class DialogImagenSocioComponent implements OnInit {

  formArchivo = new FormGroup({
    file: new FormControl('', {})
  })
  imagen:any

  constructor(@ Inject(MAT_DIALOG_DATA)
              public data: {foto:string, idMaterial:string },
              private dialogRef: MatDialogRef<DialogImagenSocioComponent>,
              private materialService:MaterialServices) {
  }


  ngOnInit(): void {
    this.materialService.findOneImg(Number(this.data.idMaterial), Number(this.data.foto)).subscribe(url => {
      console.log(url)
      if (url.type == "application/json") {
        this.imagen = ("../../../assets/no_existe_img.png")
      } else {
        this.imagen = URL.createObjectURL(url)
      }
    })
  }



  subirImagen(form:any){
      if (form.valid) {
          let formData = new FormData()
          // let ext = form.value.file._files[0].split('.').last
          formData.append("file",form.value.file._files[0])
          formData.append("idmateriales",this.data.idMaterial.toString())
          formData.append("idimg", this.data.foto)
          this.materialService.saveImg(formData)
            .subscribe(() =>this.dialogRef.close())
        } else this.formArchivo.markAllAsTouched()
      }


  visualizar(form:any) {
    if (form.valid) {
      var reader = new FileReader();
      reader.readAsDataURL(form.value.file._files[0]);
      reader.onload = (_event) => {
        this.imagen = reader.result;
      }
    }
  }
}
