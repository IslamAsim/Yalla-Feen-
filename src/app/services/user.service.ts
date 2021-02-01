import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged = new Subject<boolean>();

  constructor() {
    this.logged.next(this.isLogged());
  }

  login(email: string) {
    localStorage.setItem('Email', email);
    //this.logged.next(true);
    this.setLoggedStatus(true);
  }

  logout() {
    localStorage.removeItem('Email');
    //this.logged.next(false);
    this.setLoggedStatus(false);
  }

  setLoggedStatus(status: boolean) {
    this.logged.next(status);
  }

  getLoggedStatus() {
    return this.logged.asObservable();
  }

  isLogged(): boolean {
    let email = localStorage.getItem('Email');
    if (email == null) {
      return false;
    }
    return true;
  }

}
