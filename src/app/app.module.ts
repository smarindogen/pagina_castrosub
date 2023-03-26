import{ NgModule } from '@angular/core';
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
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorsInterceptorService} from "./interceptors/errors.interceptor.service";
import {BaseUrlInterceptorService} from "./interceptors/base-url-interceptor.service";
import { NgxSpinnerModule } from "ngx-spinner";
import {LoadingInterceptorService} from "./interceptors/loading.interceptor.service";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {DocumentosSociosComponent} from "./components/socios/documentos-socios/documentos-socios.component";
import {AnadirMaterialComponent} from "./components/material/anadir-material/anadir-material.component";
import {AnadirSocioComponent} from "./components/socios/anadir-socio/anadir-socio.component";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SafeUrlPipe} from "./SafeUrlPipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ComprarComponent } from './comprar/comprar.component';




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
    AnadirSocioComponent,
    AnadirMaterialComponent,
    DocumentosSociosComponent,
    SafeUrlPipe,
    ComprarComponent
  ],
    imports: [
        BrowserAnimationsModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
        MaterialFileInputModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        MatAutocompleteModule,
        MatCardModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSnackBarModule,

    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptorService,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
