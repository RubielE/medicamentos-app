import { Component, OnInit } from '@angular/core';
import { inmunoquimica } from '../../../../models/inmunoquimica';
import { InmunoquimicaService } from 'src/app/services/inmunoquimica.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inmunoquimica-listadoadmin',
  templateUrl: './inmunoquimica-listadoadmin.component.html',
  styleUrls: ['./inmunoquimica-listadoadmin.component.css']
})

export class InmunoquimicaListadoadminComponent implements OnInit {

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

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.inmunoquimicaService.eliminarReactivo(id._id).subscribe(resultado => {
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


