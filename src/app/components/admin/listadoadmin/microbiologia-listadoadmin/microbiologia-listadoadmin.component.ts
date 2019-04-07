import { Component, OnInit } from '@angular/core';
import { microbiologia } from '../../../../models/microbiologia';
import { MicrobiologiaService } from 'src/app/services/microbiologia.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-microbiologia-listadoadmin',
  templateUrl: './microbiologia-listadoadmin.component.html',
  styleUrls: ['./microbiologia-listadoadmin.component.css']
})
export class MicrobiologiaListadoadminComponent implements OnInit {

  public  microbiologia:  microbiologia;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private microbiologiaService: MicrobiologiaService
  ) {
    this.microbiologia = new microbiologia("", "", "", "", new Date(),);
  }

  filtermicrobioItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.microbiologiaService.obtenerListaMicrobiologia().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.microbiologiaService.eliminarReactivo(id._id).subscribe(resultado => {
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


