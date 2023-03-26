import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Socio} from "../../../interfaces/socios.interface";
import {DialogImagenSocioComponent} from "../../dialog-imagen-socio/dialog-imagen-socio.component";
import {SociosService} from "../../../services/socios.service";

export const MY_FORMATS = {
parse: {
  dateInput: 'LL',
},
display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
},
};


@Component({
  selector: 'app-anadir-socio',
  templateUrl: './anadir-socio.component.html',
  styleUrls: ['./anadir-socio.component.css'],
  providers: [],

})
export class AnadirSocioComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.required]
    }),
    apellidos: new FormControl('', {
      validators: [Validators.required]
    }),
    dni: new FormControl('', {
      validators: [Validators.required]
    }),
    fnacimiento: new FormControl('', {
      validators: [Validators.required, Validators.pattern(RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/))]
    }),
    tlf: new FormControl('', {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    direccion: new FormControl('', {
      validators: [Validators.required]
    }),
    actividad: new FormControl('', {
      validators: [Validators.required]
    }),
    cargo: new FormControl('', {
      validators: [Validators.required]
    }),
    fseguro: new FormControl('', {
      validators: [Validators.required, Validators.pattern(RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/))]
    }),
    inscripcion: new FormControl('', {validators: [Validators.required]})

  });

  constructor(public dialogRef: MatDialogRef<AnadirSocioComponent>,
              @ Inject(MAT_DIALOG_DATA) public data: Socio, private readonly socioService: SociosService,
              public imagendialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    if (this.data != null) {
      this.rellenarDatos(this.data)
    }
  }

  guardar(form: any) {
    console.log(form)
    if (form.valid) {
      if (this.data == null) {
        form.value.inscripcion = form.value.inscripcion == 'true' ? true : false;
        this.socioService.saveSocio(form.value)
          //this.socioService.addSocio(form.value)
          .subscribe(() => this.dialogRef.close(""))
      } else {
        form.value.inscripcion = form.value.inscripcion == 'true' ? true : false;
        form.value.idsocios=this.data.idsocios
        this.socioService.updateSocio(form.value).subscribe(() =>
          this.dialogRef.close(""))
      }
    } else {
      form.markAllAsTouched()
      return
    }
  }


  rellenarDatos(data: Socio) {
    console.log(data)
    let inscripcion1 = data.inscripcion ? 'true' : 'false'
    //Por que al principio no habia fecha de nacimiento, nuevo añadido 2022
    let fnacimiento = ""
    if (data.fnacimiento != undefined) {
      fnacimiento = data.fnacimiento.toString()
    }
    this.form.setValue({
      nombre: data.nombre.toString(),
      apellidos: data.apellidos.toString(),
      dni: data.dni.toString(),
      fnacimiento: fnacimiento,
      tlf: data.tlf.toString(),
      email: data.email.toString(),
      direccion: data.direccion.toString(),
      actividad: data.actividad.toString(),
      cargo: data.cargo.toString(),
      fseguro: data.fseguro.toString(),
      inscripcion: inscripcion1
    });
  }

  openDialogImagen(foto: String) {
    const dialogRef = this.imagendialog.open(DialogImagenSocioComponent, {
      maxHeight: '90%',
      maxWidth: '90%',
      panelClass: 'myapp-no-padding-dialog',
      data: {
        foto: foto,
        socio: this.data
      },
    });
  }
}
