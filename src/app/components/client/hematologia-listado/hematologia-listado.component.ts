import { Component, OnInit } from '@angular/core';
import { hematologia } from '../../../models/hematologia';
import { HematologiaService } from 'src/app/services/hematologia.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hematologia-listado',
  templateUrl: './hematologia-listado.component.html',
  styleUrls: ['./hematologia-listado.component.css']
})
export class HematologiaListadoComponent implements OnInit {
  public  hematologia:  hematologia;
  public  data: any;
  public identity;
  public token;

  constructor(
              private router: Router,
              private hematologiaService: HematologiaService
  ) {
    this.hematologia = new hematologia("", "","", new Date(),);
   }

  filterhematItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.hematologiaService.obtenerListaHematologia().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
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


