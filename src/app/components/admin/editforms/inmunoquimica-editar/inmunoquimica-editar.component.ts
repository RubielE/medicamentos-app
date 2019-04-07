import { Component, OnInit } from '@angular/core';
import { inmunoquimica } from '../../../../models/inmunoquimica';
import { InmunoquimicaService } from '../../../../services/inmunoquimica.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-inmunoquimica-editar',
  templateUrl: './inmunoquimica-editar.component.html',
  styleUrls: ['./inmunoquimica-editar.component.css'],
  providers: [InmunoquimicaService]
})
export class InmunoquimicaEditarComponent implements OnInit {

  public titleSection: string;
  public inmunoquimica: inmunoquimica;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _inmunoquimicaService: InmunoquimicaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactivo";
          console.log(this.inmunoquimica);
}

  ngOnInit() {
    this.inmunoquimica = new inmunoquimica("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._inmunoquimicaService.getReactivo(id).subscribe(
        response => {
          this.inmunoquimica = response['data'];
          console.log(this.inmunoquimica);
            if (!this.inmunoquimica) {
             // this.router.navigate(['/']);
             console.log(response);
            }
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('error en la petición');
          }
        }
      );
    });
  }

  guardar(){
    console.log('this.inmunoquimica');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._inmunoquimicaService.editarReactivo(id, this.inmunoquimica).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.inmunoquimica =  res;

          }
        },
        error =>{
          var errorMessage = <any>error;
          if(errorMessage ! = null){
            var body = JSON.parse(error._body);
            console.log(error);
          }
        }
      );
    });
  }


}

