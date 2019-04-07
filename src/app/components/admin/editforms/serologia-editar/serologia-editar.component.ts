import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerologiaService } from '../../../../services/serologia.service';
import { serologia } from '../../../../models/serologia';

@Component({
  selector: 'app-serologia-editar',
  templateUrl: './serologia-editar.component.html',
  styleUrls: ['./serologia-editar.component.css'],
  providers: [SerologiaService]
})
export class SerologiaEditarComponent implements OnInit {

  titleSection: string;
  public serologia: serologia;
  public id: any;
  public errorMessage: any;
  public alertMessage;

  constructor(
      private serologiaService: SerologiaService,
      private router: Router,
      private route: ActivatedRoute
   ) {
    this.titleSection = 'Editar reactivo';
    console.log(this.serologia);
   }

  ngOnInit() {

    this.serologia = new serologia("", "", "", new Date(),);
    this.getReactivo();
  }

  getReactivo(){
    this.route.params.forEach((params: Params) => {
      let id = {
        '_id': params['id']
      }
      console.log(id);
      this.serologiaService.getReactivo(id)
        .subscribe( res => {
          this.serologia = res['data'];
          console.log(this.serologia);
            if ( this.serologia){
             // this.router.navigate['/'];
             console.log(res);
            }
        
    }, error => {
       this.errorMessage = <any> error;
          if (this.errorMessage != null){
              console.log(this.errorMessage);
              alert('error en la petición');

          }
        }
      );
  });

}

guardar(){
  console.log('this.serologia');
  this.route.params.forEach((params: Params)=> {
    let id = params['_id'];
    this.serologiaService.editarReactivo(id, this.serologia)
      .subscribe( res => {
               if (!res) {
               this.alertMessage = 'Error en el servidor';
               } else {
                this.alertMessage = 'El reactivo se ha actualizado correctamente';
                this.serologia = res;
            }
        }, error => {
          var errorMessage = <any> error;
          if(errorMessage != null){
            var body = JSON.parse(error.body);
            console.log(error);
          }
        }
      );
  
  });
}

}
