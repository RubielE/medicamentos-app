import { Component, OnInit } from '@angular/core';
import { serologia } from '../../../../models/serologia';
import { SerologiaService } from 'src/app/services/serologia.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-serologia-listadoadmin',
  templateUrl: './serologia-listadoadmin.component.html',
  styleUrls: ['./serologia-listadoadmin.component.css']
})
export class SerologiaListadoadminComponent implements OnInit {

  public  serologia:  serologia;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private serologiaService: SerologiaService
  ) {
    this.serologia = new serologia("", "","", new Date(),);
  }

  filterserologiaItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.serologiaService.obtenerListaSerologia().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.serologiaService.eliminarReactivo(id._id).subscribe(resultado => {
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


