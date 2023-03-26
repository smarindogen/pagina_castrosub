import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Material} from "../../../interfaces/material.interace";
import {MaterialServices} from "../../../services/material.services";
import {DialogImagenSocioComponent} from "../../dialog-imagen-socio/dialog-imagen-socio.component";


@Component({
  selector: 'app-anadir-material',
  templateUrl: './anadir-material.component.html',
  styleUrls: ['./anadir-material.component.css']
})
export class AnadirMaterialComponent implements OnInit {

  hide= true;
  checked = true;
  material: Material | undefined

  form = new FormGroup({
    tipo: new FormControl('', {
      validators: [Validators.required]
    }),
    marca: new FormControl('', {
      validators: [Validators.required]
    }),
    talla_capacidad: new FormControl('', {
      validators: [Validators.required]
    }),
    descripcion: new FormControl('', {
      validators: [Validators.required]
    }),
    fecha: new FormControl('', {})
  })

  constructor(public dialogRef: MatDialogRef<AnadirMaterialComponent>,
              @ Inject(MAT_DIALOG_DATA) public data: Material, private readonly materialService:MaterialServices,
              public imagendialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    if(this.data!=null){
      this.rellenarDatos(this.data)
    }
  }

  guardar(form:any) {
    console.log(form)
    if (form.valid) {
      if (this.data == null) {
        this.materialService.saveMaterial(form.value)
          .subscribe(() => this.dialogRef.close(""))
      } else {
        form.value.idmateriales=this.data.idmateriales
        this.materialService.updateMaterial(form.value).subscribe(() =>
          this.dialogRef.close(""))
      }
    } else {
      form.markAllAsTouched()
      return
    }

  }
  rellenarDatos(data: Material) {
    console.log(data)
    let s=""
    if(data.revisiones!=undefined){
    var seg= data.revisiones[data.revisiones.length-1].fecha.seconds
    s = new Date(seg*1000).toLocaleDateString("es-ES")
    }
    this.form.setValue({
      tipo: data.tipo.toString(),
      marca: data.marca.toString(),
      talla_capacidad: data.talla_capacidad.toString(),
      descripcion: data.descripcion.toString(),
      fecha: s.toString(),
    });
  }

  openDialogImagen(numero: string) {
   this.imagendialog.open(DialogImagenSocioComponent,{
      maxHeight:'90%',
      maxWidth:'90%',
      panelClass: 'myapp-no-padding-dialog',
      data: { foto: numero,
        idMaterial: this.data.idmateriales
      },
    });

  }
}

