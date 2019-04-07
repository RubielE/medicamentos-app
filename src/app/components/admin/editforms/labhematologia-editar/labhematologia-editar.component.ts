import { Component, OnInit } from '@angular/core';
import { labhematologia } from '../../../../models/labhematologia';
import { LabhematologiaService } from '../../../../services/labhematologia.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-labhematologia-editar',
  templateUrl: './labhematologia-editar.component.html',
  styleUrls: ['./labhematologia-editar.component.css'],
  providers: [LabhematologiaService]
})
export class LabhematologiaEditarComponent implements OnInit {

  public titleSection: string;
  public labhematologia: labhematologia;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _labhematologiaService: LabhematologiaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactivo";
          console.log(this.labhematologia);
}

  ngOnInit() {
    this.labhematologia = new labhematologia("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._labhematologiaService.getReactivo(id).subscribe(
        response => {
          this.labhematologia = response['data'];
          console.log(this.labhematologia);
            if (!this.labhematologia) {
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
    console.log('this.labhematologia');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._labhematologiaService.editarReactivo(id, this.labhematologia).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.labhematologia =  res;

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
