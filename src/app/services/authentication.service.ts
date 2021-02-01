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
  setLoggedStatus(status: boolean)
  {
    // this.logged.next(status);
  }
  changeStatus(isLogged: boolean) {
    this.isLoggedSource.next(isLogged);
  }
  login(user: {email: string, password: string}){
    return this._apiService.post(`user/login`, user);
  }
  isLoggedCheck(){
    const token = localStorage.getItem('token');
    token ? this.changeStatus(true) : this.changeStatus(false);
  }
  getLoggedStatus() {
    // return this.logged.asObservable();
  }
}
