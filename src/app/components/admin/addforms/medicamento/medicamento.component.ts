import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../../../models/medicamentos';
import { MedicamentosService } from '../../../../services/medicamentos.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styles: []
})
export class MedicamentoComponent implements OnInit {

  public nuevo: boolean = false;

  public medicamentos: Medicamentos;


  public id:any;

  constructor(private _medicamentosService: MedicamentosService,
              private router: Router) {
                this.medicamentos = new Medicamentos("", new Date(), "", "", "", "", "", "", "", "", "", "", "");

  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.medicamentos);
    //insertando
    this._medicamentosService
      .crearMedicamento( this.medicamentos)
        .subscribe( data => {
      this.router.navigate(['/medicamento', data])
    }, error => console.log(error));
/*
    let params: any = this.medicamentos;
    console.log(params);
      */
  }

}
