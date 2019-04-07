import { Component, OnInit } from '@angular/core';
import { inmunoquimica } from '../../../models/inmunoquimica';
import { InmunoquimicaService } from 'src/app/services/inmunoquimica.service';
import { } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inmunoquimica-listado',
  templateUrl: './inmunoquimica-listado.component.html',
  styleUrls: ['./inmunoquimica-listado.component.css']
})
export class InmunoquimicaListadoComponent implements OnInit {
  public  inmunoquimica:  inmunoquimica;
  public  data: any;
  public identity;
  public token;

  constructor(
              private router: Router,
              private inmunoquimicaService: InmunoquimicaService
  ) {
    this.inmunoquimica = new inmunoquimica("", "","", new Date(),);
   }

  filterinmuquimicaItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.inmunoquimicaService.obtenerListaInmunoquimica().subscribe((result)=> {
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



