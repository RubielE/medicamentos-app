import { Component, OnInit } from '@angular/core';
import { labgenetica } from '../../../../models/labgenetica';
import { LabgeneticaService } from 'src/app/services/labgenetica.service';
import { } from '../../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-labgenetica-listadoadmin',
  templateUrl: './labgenetica-listadoadmin.component.html',
  styleUrls: ['./labgenetica-listadoadmin.component.css']
})
export class LabgeneticaListadoadminComponent implements OnInit {

  public  labgenetica:  labgenetica;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private labgeneticaService: LabgeneticaService
  ) {
    this.labgenetica = new labgenetica("", "","", new Date(),);
  }

  filterlabgenetItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.labgeneticaService.obtenerListaLabgenetica().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.labgeneticaService.eliminarReactivo(id._id).subscribe(resultado => {
    console.log(resultado);
    this.listar();
  },
    error => {
      console.log(JSON.stringify(error));
    });
}

  onCancelReactivo(){
   // this.confirmado = null;
  }
 

  ngOnInit() {

//llamando metodo listar
    this.listar();
  }

  buscarReactivo( termino: string){
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

