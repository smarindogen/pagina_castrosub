import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {getStorage} from "@angular/fire/storage";
import {MaterialServices} from "../../services/material.services";


@Component({
  selector: 'app-dialog-imagen',
  templateUrl: './dialog-imagen-material.component.html',
  styleUrls: ['./dialog-imagen-material.component.css']
})
export class DialogImagenMaterialComponent implements OnInit {

  listImagenes: string[] = []
  storage = getStorage();

  constructor(public dialogRef: MatDialogRef<DialogImagenMaterialComponent>, private materialService: MaterialServices,
              @ Inject(MAT_DIALOG_DATA) public data: number) {
  }

  ngOnInit(): void {
    this.listImagenes = []
    for (let i = 1; i < 4; i++) {
      this.materialService.findOneImg(Number(this.data), i).subscribe(url => {
        if (url.type == "application/json" && i == 1) {
          this.listImagenes.push("../../../assets/no_existe_img.png")
        } else if (url.type != "application/json") {
          let imagen = URL.createObjectURL(url)
          this.listImagenes.push(imagen)
        }
      })
    }
    console.log(this.listImagenes)
  }
}
