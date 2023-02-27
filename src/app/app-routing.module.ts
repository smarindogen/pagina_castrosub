import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from "./components/intro/intro.component";
import {GeneralComponent} from "./components/general/general.component";
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {SociosComponent} from "./components/socios/socios.component";
import {MaterialComponent} from "./components/material/material.component";
import {InfoComponent} from "./components/info/info.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['intro']);

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: "intro", component: IntroComponent},
  {path: "general", component: GeneralComponent,...canActivate(redirectUnauthorizedToLogin),
  children:[
    { path: '', redirectTo: 'socios', pathMatch: 'full' },
    {path: "socios", component: SociosComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path: "material", component: MaterialComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path: "info", component: InfoComponent,...canActivate(redirectUnauthorizedToLogin)},
  ]},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
