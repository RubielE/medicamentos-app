import { Component, OnInit } from '@angular/core';
import { microbiologia } from '../../../models/microbiologia';
import { MicrobiologiaService } from 'src/app/services/microbiologia.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-microbiologia-listado',
  templateUrl: './microbiologia-listado.component.html',
  styleUrls: ['./microbiologia-listado.component.css']
})
export class MicrobiologiaListadoComponent implements OnInit {
  public  microbiologia:  microbiologia;
  public  data: any;
  public identity;
  public token;

  constructor(
              private router: Router,
              private microbiologiaService: MicrobiologiaService
  ) {
    this.microbiologia = new microbiologia("", "", "","", new Date());
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


