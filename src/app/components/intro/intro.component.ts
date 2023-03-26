import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from "../../interfaces/login.interface";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {SociosService} from "../../services/socios.service";
import {MatSnackBar} from "@angular/material/snack-bar";




@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})



export class IntroComponent implements OnInit {
  hide = true;
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', { validators: [Validators.required] })
  });


  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();



  getErrorMessage() {
    // @ts-ignore
    if (this.email.hasError('required')) {
      return 'Debe escribir un email';
    }
    // @ts-ignore
    return this.email.hasError('email') ? 'Escriba un email valido' : '';
  }

  constructor(private fb: FormBuilder,
              private readonly router: Router, private readonly authService: AuthService,
              private readonly sociosService: SociosService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    localStorage.clear()
  }

  get email() {
    return this.form.get('email');
  }


  onSubmit() {
    //this.router.navigate(['/general'])
    this.login(<LoginData>this.form.value)
  }

  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .catch((e) => console.log(e.message));

  }

  async restablecer(){
    if(this.email?.value!=null||this.email?.value!=undefined){
      this.openSnackBar(await this.authService.restablecer(this.email?.value),"Vale")
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

