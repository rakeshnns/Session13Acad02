import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {

  canActivate() {

     if (sessionStorage.getItem('Loginstatus') === 'Y') {
        if (sessionStorage.getItem('LoginUser') === sessionStorage.getItem('USERNAME') ) {
             return true;
        }else {
            return false;
        }
     } else {
         alert('Not Authorised, Please login with valid credentials.');
         return false;
     }
  }
}
