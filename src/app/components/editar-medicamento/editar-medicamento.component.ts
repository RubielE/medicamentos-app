import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Medicamentos } from '../../models/medicamentos';

import { MedicamentosService } from '../../services/medicamentos.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styles: ['./editarMedicamento/editarMedicamento.css'],
  providers:[MedicamentosService]
})
export class EditarMedicamentoComponent implements OnInit {


  public titleSection: string;
  public medicamentos: Medicamentos;
  public errorMessage: any;
  public alertMessage;

  public id: any;

  constructor(private _medicamentosService: MedicamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.titleSection = "Editar medicamento";
    //console.log(this.medicamentos);
  }

  ngOnInit() {
    this.medicamentos = new Medicamentos("", new Date(), "", "", "", "", "", "", "", "", "", "", "");
    this.getMedicamento();
  }

  getMedicamento() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this._medicamentosService.getMedicamento(id).subscribe(
        response => {
          this.medicamentos = response['data'][0];
          console.log(this.medicamentos);
            if (!this.medicamentos) {
              this.router.navigate(['/']);
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
    console.log('this.medicamentos');
    this.route.params.forEach((params: Params)=>{
      let id = params['id'];
      this._medicamentosService.editarMedicamento(id, this.medicamentos).subscribe(
        res =>{
          if(!res){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'El medicamento se ha actualizado correctamente!';
            this.medicamentos =  res;
            
          }
        },
        error =>{
          var errorMessage = <any>error;
          if(errorMessage ! = null){
            var body = JSON.parse(error._body);
           // this._medicamentosService.alertMessage = body.message;
            console.log(error);
          }
        }
      );
    });
  }


}