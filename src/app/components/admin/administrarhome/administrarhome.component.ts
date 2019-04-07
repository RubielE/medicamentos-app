import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-administrarhome',
  templateUrl: './administrarhome.component.html',
  styleUrls: ['./administrarhome.component.css']
})
export class AdministrarhomeComponent implements OnInit {
  public title = 'Administrar';

  constructor(private userService: UserService) { }
  public isLogged: boolean = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void{
    this.userService.logout();
  }

  onCheckUser(): void {
    if (this.userService.getIdentity() == null){
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

}
