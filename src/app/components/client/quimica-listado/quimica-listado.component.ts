import { Component, OnInit } from '@angular/core';
import { quimica } from '../../../models/quimica';
import { QuimicaService } from 'src/app/services/quimica.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quimica-listado',
  templateUrl: './quimica-listado.component.html',
  styleUrls: ['./quimica-listado.component.css']
})
export class QuimicaListadoComponent implements OnInit {
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



