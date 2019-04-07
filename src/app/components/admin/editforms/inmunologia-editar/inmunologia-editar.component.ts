import { Component, OnInit } from '@angular/core';
import { inmunologia } from '../../../../models/inmunologia';
import { InmunologiaService } from '../../../../services/inmunologia.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-inmunologia-editar',
  templateUrl: './inmunologia-editar.component.html',
  styleUrls: ['./inmunologia-editar.component.css'],
  providers: [InmunologiaService]
})
export class InmunologiaEditarComponent implements OnInit {
  public titleSection: string;
  public inmunologia: inmunologia;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
    private _inmunologiaService: InmunologiaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.titleSection = "Editar medicamento";
          console.log(this.inmunologia);
  }

  ngOnInit() {
    this.inmunologia = new inmunologia("", "","", new Date(),);
    this.getReactivo();
  }

  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['id']
      }
      console.log(id);
      this._inmunologiaService.getReactivo(id).subscribe(
        response => {
          this.inmunologia = response['data'];
          console.log(this.inmunologia);
            if (!this.inmunologia) {
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
    console.log('this.inmunologia');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._inmunologiaService.editarReactivo(id, this.inmunologia).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.inmunologia =  res;

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

