import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private user: UserService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

console.log(next);
    if( this.user.getIdentity){
      console.log("Paso el guard");
      return true;
    }else{
      console.error("bloqueado por el guard");
      return false;
    }
    return true;
  }

}
