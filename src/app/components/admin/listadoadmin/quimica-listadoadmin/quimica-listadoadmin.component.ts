import { Component, OnInit } from '@angular/core';
import { quimica } from '../../../../models/quimica';
import { QuimicaService } from 'src/app/services/quimica.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quimica-listadoadmin',
  templateUrl: './quimica-listadoadmin.component.html',
  styleUrls: ['./quimica-listadoadmin.component.css']
})
export class QuimicaListadoadminComponent implements OnInit {

  public  quimica:  quimica;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private quimicaService: QuimicaService
  ) {
    this.quimica = new quimica("", "","", new Date(),);
  }

  filterquimicaItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.quimicaService.obtenerListaQuimica().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.quimicaService.eliminarReactivo(id._id).subscribe(resultado => {
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


