import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Usuario } from '../../../models/authenticate/user'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
}) 
export class UserEditComponent implements OnInit {
  public titulo: string;
  public users: Usuario;
  public identity;
  public token;

  constructor(private _userService: UserService) { 
    this.titulo = 'Actualizar mis datos';
   // this.users = new User( '', '', '', 'ROLE_USER', '');

    //localStrage
  //  this.identity= this._userService.getIdentity();
  //  this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log('user-edit.component.ts cargado');
  }

  onSubmit(){
    console.log(this.users);
  }

}
