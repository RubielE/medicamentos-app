import { Component, OnInit } from '@angular/core';
import { labhematologia } from '../../../../models/labhematologia';
import { LabhematologiaService } from 'src/app/services/labhematologia.service';
import { } from '../../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-labhematologia-listadoadmin',
  templateUrl: './labhematologia-listadoadmin.component.html',
  styleUrls: ['./labhematologia-listadoadmin.component.css']
})
export class LabhematologiaListadoadminComponent implements OnInit {

  public  labhematologia:  labhematologia;
  public  data: any;
  public identity;
  public token;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private labhematologiaService: LabhematologiaService
  ) {
    this.labhematologia = new labhematologia("", "","", new Date(),);
  }

  filterlabhematItem='';

  pageActual: number = 1;
  date = Date;

  listar(){
    this.labhematologiaService.obtenerListaLabhematologia().subscribe((result)=> {
      console.log(result);
      this.data= result['data'];
    }, error=>{
      console.log(error);
    })
  }

//eliminar Reactivo
eliminarReactivo(id) {
  console.log(id);
  this.labhematologiaService.eliminarReactivo(id._id).subscribe(resultado => {
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


