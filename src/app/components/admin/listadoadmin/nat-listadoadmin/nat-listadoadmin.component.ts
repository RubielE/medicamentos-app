import { Component, OnInit } from '@angular/core';
import { nat } from '../../../../models/nat';
import { NatService } from 'src/app/services/nat.service';
import { } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nat-listadoadmin',
  templateUrl: './nat-listadoadmin.component.html',
  styleUrls: ['./nat-listadoadmin.component.css']
})
export class NatListadoadminComponent implements OnInit {

  public  nat:  nat;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,

    private natService: NatService
  ) {
    this.nat = new nat("", "","", new Date(),);
  }

  filternatItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.natService.obtenerListaNat().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar medicamento
eliminarReactivo(id) {
  console.log(id);
  this.natService.eliminarReactivo(id._id).subscribe(resultado => {
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


