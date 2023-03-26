import {Component, OnInit} from '@angular/core';
import {Socio} from "../../interfaces/socios.interface";
import {MatDialog} from "@angular/material/dialog";
import {MaterialServices} from "../../services/material.services";
import {Material} from "../../interfaces/material.interace";
import {getStorage} from "@angular/fire/storage";
import {DialogImagenMaterialComponent,} from "../dialog-imagen-material/dialog-imagen-material.component";
import {AnadirMaterialComponent} from "./anadir-material/anadir-material.component";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {

  listaMaterial: MaterialImagen[] = []

  socioActual: Socio = JSON.parse(<string>localStorage.getItem("socioActual"))


  constructor(private materialService: MaterialServices, public dialog: MatDialog) {
  }

  storage = getStorage();

  ngOnInit(): void {
    this.listaMaterial = []
    if (this.listaMaterial.length == 0) {
      this.realizarLista()
    }
    console.log(this.socioActual)
  }

  realizarLista() {
    this.materialService.findAllMaterial().subscribe((data) => {
      console.log(data)
      data.materiales.sort((a, b) => (a.tipo > b.tipo) ? 1 : -1)
      data.materiales.forEach(value => {
        var materialImagen={material:value,imagen:""}
        this.materialService.findOneImg(Number(value.idmateriales), 1).subscribe(url => {
          console.log(url)
          console.log(URL.createObjectURL(url))
          if(url.type=="application/json"){
            materialImagen.imagen=( "../../../assets/no_existe_img.png")
            this.listaMaterial.push(materialImagen)
          }else{
            materialImagen.imagen = URL.createObjectURL(url)
            this.listaMaterial.push(materialImagen)
          }
        })
      })
      this.listaMaterial = []
    })
  }

  openDialogImagen(material: Material) {
    const dialogRef = this.dialog.open(DialogImagenMaterialComponent, {
      maxHeight: '90%',
      maxWidth: '90%',
      panelClass: 'myapp-no-padding-dialog',
      data: material.idmateriales
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(AnadirMaterialComponent, {
      width: '80%',
      panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

  openUpdateDialog(material: Material) {
    const dialogRef = this.dialog.open(AnadirMaterialComponent, {
      width: '80%',
      panelClass: 'myapp-no-padding-dialog',
      data: material
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
}

export interface MaterialImagen {
  material: Material
  imagen: string
}





