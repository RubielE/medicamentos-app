import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../../models/medicamentos';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos-listado',
  templateUrl: './medicamentos-listado.component.html',
  styleUrls: ['./medicamentos-listado.component.css']
})


export class MedicamentosListadoComponent implements OnInit {
  public  medicamento: Medicamentos;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private smedicamento: MedicamentosService
  ) {
    this.medicamento = new Medicamentos("", new Date(), "", "", "", "", "", "", "", "", "", "", "");
  }

  filterItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.smedicamento.obtenerListaMedicamentos().subscribe((result)=> {
      console.log(result);
      this.data= result['data']; 
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarMedicamento(id) {
  console.log(id);
  this.smedicamento.eliminarMedicamento(id._id).subscribe(resultado => {
    console.log(resultado);
    this.listar();
  },
    error => {
      console.log(JSON.stringify(error));
    });
} 

  onCancelMedicamento(){
   // this.confirmado = null;
  }
  onDeleteMedicamento(id){
   /* this._MedicamentosService.deleteMedicamento(this.token, id).subscribe(

    ) */
  }
  
  ngOnInit() {

//llamando metodo listar
    this.listar();
  }

  buscarMedicamento( termino: string){
   // console.log(termino);
    this.router.navigate(['/buscar, termino']);
  }


  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('tocken');
    localStorage.clear();

    this.identity = null;
    this.token = null;
  } 

}

