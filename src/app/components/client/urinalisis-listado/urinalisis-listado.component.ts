import { Component, OnInit } from '@angular/core';
import { urinalisis } from '../../../models/urinalisis';
import { UrinalisisService } from 'src/app/services/urinalisis.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-urinalisis-listado',
  templateUrl: './urinalisis-listado.component.html',
  styleUrls: ['./urinalisis-listado.component.css']
})
export class UrinalisisListadoComponent implements OnInit {
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


