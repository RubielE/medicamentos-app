import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/authenticate/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  

  public title = 'Farma-app';
  public user: User;
  public users_register: User;
  public identity;
  public token;

  public errorMessage;
  public alertRegister;

  constructor(
    private _userService:UserService
  ){
    this.user = new User( '', '', '', 'ROLE_USER', '');
    this.users_register = new User( '', '', '', '', '');
  }

  ngOnInit() {
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
    /* var texto = this._userService.singup();
     console.log(texto);  */
   }

  public onSubmit(){
    console.log(this.user);
    // Conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
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
                  this._userService.singup(this.user, 'true').subscribe(
                    response => {
                      let token = response['token'];
                      this.token = token;
                      console.log(response);
          
                          if (this.token.length <= 0 ){
                              alert("El token no se ha generado correctamente ");
                          } else {
                            // Crear elemento en el local storage para tener token disponible
                            localStorage.setItem('token', token );
                            this.user= new User( '', '', '', 'ROLE_USER', '');
                               // console.log(token);
                               // console.log(identity);
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
                var body = JSON.parse(error.body);
                this.errorMessage = body.Message;
                console.log(error);
              }
          }  
    );
  }


  onSubmitRegister(){
    console.log(this.users_register);

    this._userService.register(this.users_register).subscribe(
      response => {
        let user = response.user;
        this.users_register= user ;
          
          if(!user._id){
            this.alertRegister ='Error al registrarse';
          }else{
            this.alertRegister = 'El registro se ha realizado correctamente, identificate con' +this.users_register;
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

logout(){
  localStorage.removeItem('identity');
  localStorage.removeItem('token');
  localStorage.clear();
  this.identity = null;
  this.token = null;
}
  
}
