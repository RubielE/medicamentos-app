import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/authenticate/user';
import { UserService } from '../../../services/user.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
//import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  public title = 'Farma-app';
  public user: Usuario;
  public user_register: Usuario;
  public identity;
  public token;

  public errorMessage;
  public alertRegister;

  constructor(
    private _userService:UserService
  ){
    this.user_register = new Usuario( '', '', '', 'rol', '');
  }

  ngOnInit() {
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
    
   }
  
  onRegister(){
    console.log(this.user_register);

    this._userService.register(this.user_register).subscribe(
      response => {
            let user = response.user;
            this.user_register= user;
              
              if(!user._id){
                this.alertRegister ='Error al registrarse';
              }else{
                this.alertRegister = 'El registro se ha realizado correctamente.';
                this.user_register = new Usuario('', '', '', 'rol', '');
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
  
}