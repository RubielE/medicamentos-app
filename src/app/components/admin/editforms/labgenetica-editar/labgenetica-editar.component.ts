import { Component, OnInit } from '@angular/core';
import { labgenetica } from '../../../../models/labgenetica';
import { LabgeneticaService } from '../../../../services/labgenetica.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-labgenetica-editar',
  templateUrl: './labgenetica-editar.component.html',
  styleUrls: ['./labgenetica-editar.component.css'],
  providers: [LabgeneticaService]
})
export class LabgeneticaEditarComponent implements OnInit {

  public titleSection: string;
  public labgenetica: labgenetica;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _labgeneticaService: LabgeneticaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactivo";
          console.log(this.labgenetica);
}

  ngOnInit() {
    this.labgenetica = new labgenetica("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._labgeneticaService.getReactivo(id).subscribe(
        response => {
          this.labgenetica = response['data'];
          console.log(this.labgenetica);
            if (!this.labgenetica) {
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
    console.log('this.labgenetica');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._labgeneticaService.editarReactivo(id, this.labgenetica).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.labgenetica =  res;

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

