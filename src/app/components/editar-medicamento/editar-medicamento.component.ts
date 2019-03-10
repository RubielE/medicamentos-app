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

  public id: any;

  constructor(private _medicamentosService: MedicamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.titleSection = "Editar medicamento";
    console.log(this.medicamentos);
  }

  ngOnInit() {
    this.medicamentos = new Medicamentos("", new Date(), "", "", "", "", "", "", "", "", "", "", "");
    this.getMedicamento();
  }

  getMedicamento() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this._medicamentosService.getMedicamento(id).subscribe(
        response => {
          this.medicamentos = response;
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
  actualizarMedicamento(data) {
    let id = this.medicamentos['_id']
     let medicamentos = {
                         fecha: new Date(),
                         medicamento: this.medicamentos.medicamento,
                         CHAAM: this.medicamentos.CHAAM,
                         JJV: this.medicamentos.JJV,
                         ADGH: this.medicamentos.ADGH,
                         MFV: this.medicamentos.MFV,
                         GG: this.medicamento.GG,
                         MMV: this.medicamento.MMV,
                         PPR: this.medicamento.PPR,
                         CNB: this.medicamento.CNB,
                         detalle: this.medicamento.detalle,
                         key: this.medicamento.key$,
     }
    console.log('evento actualizar')
    this._medicamentosService.editarMedicamento(id, this.medicamentos).subscribe(resultado => {
      console.log(resultado)
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }  */

}