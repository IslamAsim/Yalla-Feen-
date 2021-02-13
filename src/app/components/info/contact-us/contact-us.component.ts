import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  private massage: {} = {};
  private invalid: boolean = false;

  constructor() {
  }


  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  formMsg(name: string, email: string, msg: string) {
    if(name && email && msg){
      this.invalid = false;
      this.massage = {
        name,
        email,
        msg
      };
    }else {
      this.invalid = true;
    }
  }
}
