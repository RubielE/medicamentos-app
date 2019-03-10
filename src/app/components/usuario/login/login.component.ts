import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/authenticate/user';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title = 'Farma-app';
  public user: Usuario;
  public identity;
  public token;

  public errorMessage;

  constructor(
    private _userService:UserService
  ){
    this.user = new Usuario( '', '', '', 'rol', '');
  }

  ngOnInit() {

  var text =  this._userService.login;
    console.log(text);
    console.log(this.user);
    
                this.identity= this._userService.getIdentity();
                this.token= this._userService.getToken();

                console.log(this.identity);
                console.log(this.token);
   }

  public onLogin(){
    console.log(this.user);
    //console.log(this.user);
    // Conseguir los datos del usuario identificado
   return this._userService.login(this.user).subscribe(
          response => {
            let identity = response['data'];
            this.identity = identity;
            console.log(response);

                if (!this.identity._id){
                    alert("El usuario no esta correctamente identificado");
                } else {
                  // Crear elemento en el local storage para tener al usuario en sesión 
                  localStorage.setItem('identity', JSON.stringify(identity));

                  // Conseguir el token para enviarselo a cada petición http
                      this._userService.login(this.user, 'true').subscribe(
                        response => {
                          let token = response.token;
                          this.token = token;
                          console.log(response);
              
                              if (this.token.length <= 0 ){
                                  alert("El token no se ha generado correctamente ");
                              } else {
                                // Crear elemento en el local storage para tener token disponible
                                localStorage.setItem('token', token );
                                this.user= new Usuario( '', '', '', 'ROLE_USER', '');
                                    console.log(token);
                                    console.log(identity);
                              }
                      },
                    error => {
                     var errorMessage = <any>error;
                        if(errorMessage != null){
                          this.errorMessage = error;
                          console.log(error);
                        }
                    }
                
              )
                }
            
      },
          error => {
            var errorMessage = <any>error;
             if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.errorMessage = body.Message;
                console.log(error);
              }
          }  
    );
  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }


}
