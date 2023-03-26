import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  color:string="primary";




  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear()
    this.authService
      .logout()
      .then(() => this.router.navigate(['/intro']))
      .catch((e) => console.log(e.message));
  }
}
