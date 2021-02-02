import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedSource = new BehaviorSubject(false);
  status = this.isLoggedSource.asObservable();
  constructor(private _apiService: ApiService) {
    const token = localStorage.getItem('token');
    token ? this.changeStatus(true) : this.changeStatus(false);
  }
  changeStatus(isLogged: boolean) {
    this.isLoggedSource.next(isLogged);
  }
  login(user: {email: string, password: string}){
    return this._apiService.post(`user/login`, user);
  }
  signup(user: any){
    return this._apiService.post(`user/signup`, user);
  }
  logout() {
    localStorage.removeItem('token');
    this.changeStatus(false);
    console.log(this.status);
  }
  isLoggedCheck(){
    const token = localStorage.getItem('token');
    token ? this.changeStatus(true) : this.changeStatus(false);
  }

  //fain reset password ya ba4aaaaar!!!!
  resetPassword(password:any){
    alert(password);
    

    

  }
}
