import { Component, OnInit } from '@angular/core';
import { microbiologia } from '../../../../models/microbiologia';
import { MicrobiologiaService } from '../../../../services/microbiologia.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-microbiologia-editar',
  templateUrl: './microbiologia-editar.component.html',
  styleUrls: ['./microbiologia-editar.component.css'],
  providers: [MicrobiologiaService]
})
export class MicrobiologiaEditarComponent implements OnInit {

  public titleSection: string;
  public microbiologia: microbiologia;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _microbiologiaService: MicrobiologiaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactivo";
          console.log(this.microbiologia);
}

  ngOnInit() {
    this.microbiologia = new microbiologia("", "", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._microbiologiaService.getReactivo(id).subscribe(
        response => {
          this.microbiologia = response['data'];
          console.log(this.microbiologia);
            if (!this.microbiologia) {
            //  this.router.navigate(['/']);
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
    console.log('this.microbiologia');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._microbiologiaService.editarReactivo(id, this.microbiologia).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.microbiologia =  res;

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

