import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { urinalisis } from '../../../../models/urinalisis';
import { UrinalisisService } from '../../../../services/urinalisis.service';

@Component({
  selector: 'app-urinalisis-editar',
  templateUrl: './urinalisis-editar.component.html',
  styleUrls: ['./urinalisis-editar.component.css'],
  providers: [UrinalisisService]
})
export class UrinalisisEditarComponent implements OnInit {

  public titleSection: string;
  public urinalisis: urinalisis;
  public id: any;
  public errorMessage: any;
  public alertMessage;

  constructor(
      private urinalisisService: UrinalisisService,
      private router: Router,
      private route: ActivatedRoute
  ) { 
      this.titleSection = "Editar reactivo";
      console.log(this.urinalisis);

  }

  ngOnInit() {
    this.urinalisis = new urinalisis("", "", "", "", new Date(),);
    this.getReactivo();
  }

getReactivo(){
  this.route.params.forEach(( params: Params) =>{
    let id = {
      '_id': params['_id']
    }
    console.log(id);
    this.urinalisisService.getReactivo(id)
      .subscribe( res => {
        this.urinalisis = res['data'];
        console.log(this.urinalisis);
          if (!this.urinalisis){
           // this.router.navigate(['/']);
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
  console.log('this.urinalisis');
  this.route.params.forEach((params: Params)=>{
    let id = params['_id'];
    this.urinalisisService.editarReactivo(id, this.urinalisis)
      .subscribe( res => {
                if (!res){
                  this.alertMessage = ' Error en el servidor';
                } else {
                  this.alertMessage = 'El reactivo se ha actualizado correctamente';
                  this.urinalisis = res;
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

