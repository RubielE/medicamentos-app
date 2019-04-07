import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quimica } from '../../../../models/quimica';
import { QuimicaService } from '../../../../services/quimica.service';

@Component({
  selector: 'app-quimica-crear',
  templateUrl: './quimica-crear.component.html',
  styleUrls: ['./quimica-crear.component.css']
})
export class QuimicaCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public quimica: quimica;
  public id: any;

  constructor(
        private router: Router,
        private quimicaService: QuimicaService) {
            this.quimica = new quimica("", "", "", new Date(),);
         }

  ngOnInit() {
  }

  guardar(){
    this.quimicaService.crearReactivo(this.quimica)
       .subscribe( data => {
         this.router.navigate(['/quimica', data])

       }, error => console.log(error));
  }

}
