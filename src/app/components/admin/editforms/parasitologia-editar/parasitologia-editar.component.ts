import { Component, OnInit } from '@angular/core';
import { parasitologia } from '../../../../models/parasitologia';
import { ParasitologiaService } from '../../../../services/parasitologia.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-parasitologia-editar',
  templateUrl: './parasitologia-editar.component.html',
  styleUrls: ['./parasitologia-editar.component.css'],
  providers: [ParasitologiaService]
})
export class ParasitologiaEditarComponent implements OnInit {

  public titleSection: string;
  public parasitologia: parasitologia;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _parasitologiaService: ParasitologiaService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactivo";
          console.log(this.parasitologia);
}

  ngOnInit() {
    this.parasitologia = new parasitologia("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._parasitologiaService.getReactivo(id).subscribe(
        response => {
          this.parasitologia = response['data'];
          console.log(this.parasitologia);
            if (!this.parasitologia) {
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
    console.log('this.parasitologia');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._parasitologiaService.editarReactivo(id, this.parasitologia).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.parasitologia =  res;

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

