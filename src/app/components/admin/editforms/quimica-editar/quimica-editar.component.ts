import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { quimica } from '../../../../models/quimica';
import { QuimicaService } from '../../../../services/quimica.service';

@Component({
  selector: 'app-quimica-editar',
  templateUrl: './quimica-editar.component.html',
  styleUrls: ['./quimica-editar.component.css'],
  providers: [QuimicaService]
})
export class QuimicaEditarComponent implements OnInit {

  public titleSection: string;
  public quimica: quimica;
  public id: any;
  public errorMessage: any;
  public alertMessage;

  constructor(
      private quimicaService: QuimicaService,
      private router: Router,
      private route: ActivatedRoute
  ) { 
      this.titleSection = "Editar reactivo";
      console.log(this.quimica);

  }

  ngOnInit() {
    this.quimica = new quimica("", "", "", new Date(),);
    this.getReactivo();
  }

getReactivo(){
  this.route.params.forEach(( params: Params) =>{
    let id = {
      '_id': params['_id']
    }
    console.log(id);
    this.quimicaService.getReactivo(id)
      .subscribe( res => {
        this.quimica = res['data'];
        console.log(this.quimica);
          if (!this.quimica){
          //  this.router.navigate(['/']);
          console.log(res);
          }
      }, error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('error en la petición');
          }
        }
      );
  });
}

guardar(){
  console.log('this.quimica');
  this.route.params.forEach((params: Params)=>{
    let id = params['_id'];
    this.quimicaService.editarReactivo(id, this.quimica)
      .subscribe( res => {
                if (!res){
                  this.alertMessage = ' Error en el servidor';
                } else {
                  this.alertMessage = 'El reactivo se ha actualizado correctamente';
                  this.quimica = res;
                }
      }, error => {
          var errorMessage = <any>error;
              if(errorMessage != null){
                var body = JSON.parse(error.body);
                console.log(error);
              }
          }
        );
  });
}


}

