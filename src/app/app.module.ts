import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {GeneralComponent} from "./components/general/general.component";
import {IntroComponent} from "./components/intro/intro.component";
import {MaterialComponent} from "./components/material/material.component";
import {InfoComponent} from "./components/info/info.component";
import {DialogImagenSocioComponent} from "./components/dialog-imagen-socio/dialog-imagen-socio.component";
import {DialogImagenMaterialComponent} from "./components/dialog-imagen-material/dialog-imagen-material.component";
import {AnadirInfoComponent} from "./components/anadir-info/anadir-info.component";
import {AnadirSocioComponent} from "./components/anadir-socio/anadir-socio.component";
import {AnadirMaterialComponent} from "./components/anadir-material/anadir-material.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatRippleModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import {SociosComponent} from "./components/socios/socios.component";
import {MatTableModule} from "@angular/material/table";
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    GeneralComponent,
    IntroComponent,
    MaterialComponent,
    InfoComponent,
    DialogImagenSocioComponent,
    DialogImagenMaterialComponent,
    AnadirInfoComponent,
    AnadirSocioComponent,
    AnadirMaterialComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatRippleModule,
    MatTabsModule,
    MatTableModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
