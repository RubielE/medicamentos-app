import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/authenticate/user';
import { UserService } from '../../../services/user.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private userService: UserService, private router: Router, private location:Location) { }
  private user: User = {
    
        usuario: '',    
        nombre: '',
        clave: '',
        perfil: ''
  };

  public isError = false;
  public msgError = '';

  ngOnInit() {
  }
/*
  onRegister(){
    console.log(this.users_register);
    this._userService.register(this.users_register).subscribe(
      response => {
        let user = response.user;
        this.users_register= user ;
          
          if(!user._id){
            this.alertRegister ='Error al registrarse';
          }else{
            this.alertRegister = 'El registro se ha realizado correctamente, identificate con' +this.users_register.user;
            this.users_register = new User('', '', '', 'ROLE_USER', '');
          }
      },
       error => {
        var errorMessage = <any>error;
         if(errorMessage != null){
            var body = JSON.parse(error.body);
            this.alertRegister = body.Message;
            console.log(error);
          }
      } 
    );

  }
*/

}
