import { Component, OnInit } from '@angular/core';
import { hematologia } from '../../../../models/hematologia';
import { HematologiaService } from '../../../../services/hematologia.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-hematologia-editar',
  templateUrl: './hematologia-editar.component.html',
  styleUrls: ['./hematologia-editar.component.css'],
  providers: [HematologiaService]
})
export class HematologiaEditarComponent implements OnInit {

  public titleSection: string;
  public hematologia: hematologia;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _hematologiaService: HematologiaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar medicamento";
          console.log(this.hematologia);
}

  ngOnInit() {
    this.hematologia = new hematologia("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._hematologiaService.getReactivo(id).subscribe(
        response => {
          this.hematologia = response['data'];
          console.log(this.hematologia);
            if (!this.hematologia) {
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

  onSubmit(){
    console.log('this.hematologia');
    this.route.params.forEach((params: Params)=>{
      let id = params['id'];
      this._hematologiaService.editarReactivo(id, this.hematologia).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.hematologia =  res;

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
