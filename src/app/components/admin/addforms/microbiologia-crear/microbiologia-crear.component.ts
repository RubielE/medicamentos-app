import { Component, OnInit } from '@angular/core';
import { MicrobiologiaService } from 'src/app/services/microbiologia.service';
import { microbiologia } from '../../../../models/microbiologia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microbiologia-crear',
  templateUrl: './microbiologia-crear.component.html',
  styleUrls: ['./microbiologia-crear.component.css']
})
export class MicrobiologiaCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public microbiologia: microbiologia;
  public id: any;

  constructor(
    private _microbiologiaService: MicrobiologiaService,
    private router: Router) {
    this.microbiologia = new microbiologia("", "", "", "", new Date());
  }

  ngOnInit() {
  }

  guardar() {
    // console.log(this.microbiologia);
    //insertando datos
    this._microbiologiaService
      .crearReactivo(this.microbiologia)
      .subscribe(data => {
        console.log(data);
         this.router.navigate(['/microbiologia-listadoadmin'])
      }, error => console.log(error));
  }

}


