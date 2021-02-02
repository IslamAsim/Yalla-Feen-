import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  FormMail: FormGroup;
  FormCode: FormGroup;
  isSubmit: boolean = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.FormMail = this._formBuilder.group({
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
    });
    this.FormCode = this._formBuilder.group({
      code: [
        '',
        [
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(8),
        ],
      ],
    });
  }
  // tslint:disable-next-line:typedef
  SubmitEmail(e: string){
    switch (e) {
      case 'submit': this.isSubmit = true; break;
      case 'verify': this.isSubmit = false; break;
    }
  }
}
