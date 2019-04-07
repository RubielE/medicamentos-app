import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private userService: UserService, private router: Router){

  }
  canActivate(){
      if (this.userService.identity()){
        return true;
      }else {
          this.router.navigate(['/login']);
      } return false;
  }
}
