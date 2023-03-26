import {Component, OnInit} from '@angular/core';
import {Socio} from "../../interfaces/socios.interface";

import {SociosService} from "../../services/socios.service";

import {MatDialog} from "@angular/material/dialog";
import {AnadirSocioComponent} from "./anadir-socio/anadir-socio.component";
import {DocumentosSociosComponent} from "./documentos-socios/documentos-socios.component";




@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})

export class SociosComponent implements OnInit {
  dataSource: Socio[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'cargo', 'actividad', 'modificar'];
  socioActual :Socio = JSON.parse(<string>localStorage.getItem("socioActual")).socio[0]

  constructor(private sociosService: SociosService, public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sociosService.findAllSocios().subscribe(data => {
      let lista = this.ordenarLista(data.socios)
      this.dataSource = lista.reverse()
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AnadirSocioComponent,{
      width:'80%',
      height:'80%',
      panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  openUpdateDialog(socio:Socio) {
    if(this.socioActual.cargo!='Socio'||socio.email==this.socioActual.email) {
    const dialogRef = this.dialog.open(AnadirSocioComponent, {
      width: '80%',
      height: '80%',
      panelClass: 'myapp-no-padding-dialog',
      data: socio
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  }

  ordenarLista(sociosList:Socio[]):Socio[]{
    let cargos = ["Socio", "Vocal", "Tesorero", "Secretario", "Vicepresidente", "Presidente"];
    return sociosList.sort((a) => {
      if (a.cargo == cargos[0]) {
        return -1;
      }
      if (a.cargo == cargos[1]) {
        return 0;
      }
      if (a.cargo == cargos[2]) {
        return 1;
      }
      if (a.cargo == cargos[3]) {
        return 2;
      }
      if (a.cargo == cargos[4]) {
        return 3;
      }
      return 4;
    });
  }

  openDocumentDialog(socio: Socio) {
    if (this.socioActual.cargo != 'Socio' || socio.email == this.socioActual.email) {
      this.dialog.open(DocumentosSociosComponent, {
        width: '80%',
        panelClass: 'myapp-no-padding-dialog',
        data: socio.idsocios
      });
    }
  }
}
