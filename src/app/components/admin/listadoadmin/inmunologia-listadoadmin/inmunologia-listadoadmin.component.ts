import { Component, OnInit } from '@angular/core';
import { inmunologia } from '../../../../models/inmunologia';
import { InmunologiaService } from 'src/app/services/inmunologia.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inmunologia-listadoadmin',
  templateUrl: './inmunologia-listadoadmin.component.html',
  styleUrls: ['./inmunologia-listadoadmin.component.css']
})
export class InmunologiaListadoadminComponent implements OnInit {

  public  inmunologia:  inmunologia;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private inmunologiaService: InmunologiaService
  ) {
    this.inmunologia = new inmunologia("", "","", new Date(),);
  }

  filterinmunoloItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.inmunologiaService.obtenerListaInmunologia().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.inmunologiaService.eliminarReactivo(id._id).subscribe(resultado => {
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


