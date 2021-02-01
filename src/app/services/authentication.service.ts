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
  logout() {
    localStorage.removeItem('token');
    this.changeStatus(false);
  }
  isLoggedCheck(){
    const token = localStorage.getItem('token');
    token ? this.changeStatus(true) : this.changeStatus(false);
  }
}
