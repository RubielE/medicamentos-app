import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urinalisis } from '../../../../models/urinalisis';
import { UrinalisisService } from '../../../../services/urinalisis.service';

@Component({
  selector: 'app-urinalisis-crear',
  templateUrl: './urinalisis-crear.component.html',
  styleUrls: ['./urinalisis-crear.component.css']
})
export class UrinalisisCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public urinalisis: urinalisis;
  public id: any;

  constructor( 
          private router: Router,
          private urinalisisService: UrinalisisService) {
              this.urinalisis = new urinalisis("", "", "", "", new Date(),);
           }

  ngOnInit() {
  }

  guardar(){
    console.log(this.urinalisis);
    //insertando datos
    this.urinalisisService.crearReactivo(this.urinalisis)
              .subscribe( data =>{
                this.router.navigate(['/urinalisis', data])
              }, error => console.log(error));
  }

}
