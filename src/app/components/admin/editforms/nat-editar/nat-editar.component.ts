import { Component, OnInit } from '@angular/core';
import { nat } from '../../../../models/nat';
import { NatService } from '../../../../services/nat.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-nat-editar',
  templateUrl: './nat-editar.component.html',
  styleUrls: ['./nat-editar.component.css'],
  providers: [NatService]
})
export class NatEditarComponent implements OnInit {

  public titleSection: string;
  public nat: nat;
  public errorMessage: any;
  public alertMessage;
  public id: any;

  constructor(
        private _natService: NatService,
        private router: Router,
        private route: ActivatedRoute
        ) { 
          this.titleSection = "Editar reactvo";
          console.log(this.nat);
}

  ngOnInit() {
    this.nat = new nat("", "","", new Date(),);
    this.getReactivo();
  }



  getReactivo() {
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['_id']
      }
      console.log(id);
      this._natService.getReactivo(id).subscribe(
        response => {
          this.nat = response['data'];
          console.log(this.nat);
            if (!this.nat) {
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
    console.log('this.nat');
    this.route.params.forEach((params: Params)=>{
      let id = params['_id'];
      this._natService.editarReactivo(id, this.nat).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El reactivo se ha actualizado correctamente!';
            this.nat =  res;

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

