import { Component, OnInit } from '@angular/core';
import { inmunoquimica } from '../../../../models/inmunoquimica';
import { InmunoquimicaService } from '../../../../services/inmunoquimica.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inmunoquimica-crear',
  templateUrl: './inmunoquimica-crear.component.html',
  styleUrls: ['./inmunoquimica-crear.component.css']
})
export class InmunoquimicaCrearComponent implements OnInit {
  public nuevo: boolean = false;
  public inmunoquimica: inmunoquimica;
  public id:any;

  constructor(
              private _inmunoquimicaService: InmunoquimicaService,
              private router: Router) {
                this.inmunoquimica = new inmunoquimica("", "", "", new Date(),);
               }


  ngOnInit() {
    
  }

  guardar() {
    console.log(this.inmunoquimica);
    //insertando
    this._inmunoquimicaService
      .crearReactivo( this.inmunoquimica)
        .subscribe( data => {
      this.router.navigate(['/inmunoquimica', data])
    }, error => console.log(error));
/*
    let params: any = this.inmunoquimica;
    console.log(params);
      */
  }

}


