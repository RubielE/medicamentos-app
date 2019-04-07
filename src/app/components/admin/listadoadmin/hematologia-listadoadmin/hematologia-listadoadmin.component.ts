import { Component, OnInit } from '@angular/core';
import { hematologia } from '../../../../models/hematologia';
import { HematologiaService } from 'src/app/services/hematologia.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hematologia-listadoadmin',
  templateUrl: './hematologia-listadoadmin.component.html',
  styleUrls: ['./hematologia-listadoadmin.component.css']
})
export class HematologiaListadoadminComponent implements OnInit {

  public  hematologia:  hematologia;
  public  data: any;
  public identity;
  public token;

  constructor(
            private userService: UserService,
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

//eliminar reactivo
eliminarReactivo(id) {
  console.log(id);
  this.hematologiaService.eliminarReactivo(id._id).subscribe(resultado => {
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
    localStorage.removeItem('token');
    localStorage.clear();

    this.identity = null;
    this.token = null;
  }

}

