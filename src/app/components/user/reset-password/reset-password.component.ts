import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  confirm: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _authentication: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ],
      ],
      confirmpassword: [ '',
        [
          Validators.required,
        ]
      ]
    });
  }
  checkPasswords() { // here we have the 'passwords' group
  // @ts-ignore
  const password = this.form.controls.Password.value;
  // @ts-ignore
  const confirmPassword =  this.form.controls.confirmpassword.value;
  password === confirmPassword ? this.confirm = true : this.confirm = false;
}


OnSubmit(){
 const password= this.form.controls.Password.value;
 this._authentication.resetPassword(password);
 this._router.navigateByUrl('/user/login');
  // this._authentication.resetPassword(password).subscribe((response) => {
  //   console.log(response);
  //   this._router.navigateByUrl('/user/login');
  // }, (error => {
;
  //   this._router.navigateByUrl('/user/sign-up');
  // }));
}

}
