import { Component, OnInit } from '@angular/core';

import { urinalisis } from '../../../../models/urinalisis';
import { UrinalisisService } from 'src/app/services/urinalisis.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urinalisis-listadoadmin',
  templateUrl: './urinalisis-listadoadmin.component.html',
  styleUrls: ['./urinalisis-listadoadmin.component.css']
})
export class UrinalisisListadoadminComponent implements OnInit {


  public  urinalisis:  urinalisis;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private urinalisisService: UrinalisisService
  ) {
    this.urinalisis = new urinalisis("", "","", "", new Date(),);
  }

  filterurinalItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.urinalisisService.obtenerListaUrinalisis().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.urinalisisService.eliminarReactivo(id._id).subscribe(resultado => {
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


