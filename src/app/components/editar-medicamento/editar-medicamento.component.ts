import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Medicamentos } from '../../models/medicamentos';

import { MedicamentosService } from '../../services/medicamentos.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styles: ['./editarMedicamento/editarMedicamento.css']
})
export class EditarMedicamentoComponent implements OnInit {


  public titleSection: string;
  public medicamentos: Medicamentos;
  public errorMessage: any;

  public id: any;

  constructor(private _medicamentosService: MedicamentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleSection = "Editar medicamento";
    this.medicamentos = new Medicamentos("", new Date(), "", "", "", "", "", "", "", "", "", "", "");
    console.log(this.medicamentos);
  }

  ngOnInit() {
    this.getMedicamento();
  }

  getMedicamento() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];
      this._medicamentosService.getMedicamento(id).subscribe(
        res => {
          this.medicamentos = res;
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
  /*
  public update(){
    console.log(this.medicamento);
    this.activatedRoute.params.forEach((params:Params) => {
      let id = params['id'];
      this._medicamentosService
          .actualizarMedicamento(id, this.medicamento).subscribe(
        response => {
            if(!response){
                alert('Error en el servidor');
            } else{
                this.medicamento = response;
                this.router.navigate(['/medicamento', this.medicamento]);
            }
        }
      ); 
  });
  }  */


  actualizarMedicamento(data) {
    let id = this.medicamentos['_id']
    /* let medicamentos = {
                         fecha: new Date(),
                         medicamento: this.medicamento.medicamento,
                         CHAAM: this.medicamento.CHAAM,
                         JJV: this.medicamento.JJV,
                         ADGH: this.medicamento.ADGH,
                         MFV: this.medicamento.MFV,
                         GG: this.medicamento.GG,
                         MMV: this.medicamento.MMV,
                         PPR: this.medicamento.PPR,
                         CNB: this.medicamento.CNB,
                         detalle: this.medicamento.detalle,
                         key: this.medicamento.key$,
     }*/
    console.log('evento actualizar')
    this._medicamentosService.actualizarMedicamento(id, this.medicamentos).subscribe(resultado => {
      console.log(resultado)
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}