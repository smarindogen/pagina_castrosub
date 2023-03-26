import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserSessionPersistence, sendPasswordResetEmail
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login.interface';
import {Router} from "@angular/router";
import {Socio} from "../interfaces/socios.interface";
import {SociosService} from "./socios.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private readonly router: Router,private sociosService: SociosService) {}


  login({ email, password }: LoginData) {
    this.auth.setPersistence(browserSessionPersistence)
    return signInWithEmailAndPassword(this.auth, email, password).then((data)=>{
      data.user.getIdToken(true).then((token)=>{
        localStorage.setItem("token",JSON.stringify(token))
      }).then(()=>{
        this.sociosService.findOneSocio(email).subscribe((res: Socio) => {
              localStorage.setItem("socioActual", JSON.stringify(res))
              this.router.navigate(['/general'])
          })
      })
    });
  }

  logout() {
    return signOut(this.auth);
  }

  async restablecer(email:string){
    return sendPasswordResetEmail(this.auth,email).then(()=>{
      return "Se le ha enviado un email al correo"
    })
      .catch((error)=>{
      return "El email que ha introducido no existe"
    })
  }

}
