import { Component, OnInit } from '@angular/core';
import { parasitologia } from '../../../models/parasitologia';
import { ParasitologiaService } from 'src/app/services/parasitologia.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parasitologia-listado',
  templateUrl: './parasitologia-listado.component.html',
  styleUrls: ['./parasitologia-listado.component.css']
})
export class ParasitologiaListadoComponent implements OnInit {
  public  parasitologia:  parasitologia;
  public  data: any;
  public identity;
  public token;

  constructor(
              private router: Router,
              private parasitologiaService: ParasitologiaService
  ) {
    this.parasitologia = new parasitologia("", "","", new Date(),);
   }

  filterparasitologiaItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.parasitologiaService.obtenerListaParasitologia().subscribe((result)=> {
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



