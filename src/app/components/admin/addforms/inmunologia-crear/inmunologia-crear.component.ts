import { Component, OnInit } from '@angular/core';
import { inmunologia } from '../../../../models/inmunologia';
import { InmunologiaService } from '../../../../services/inmunologia.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inmunologia-crear',
  templateUrl: './inmunologia-crear.component.html',
  styleUrls: ['./inmunologia-crear.component.css']
})
export class InmunologiaCrearComponent implements OnInit {
  public nuevo: boolean = false;
  public inmunologia: inmunologia;
  public id:any;

  constructor( 
              private _inmunologiaService: InmunologiaService,
              private router: Router) { 
                this.inmunologia = new inmunologia("", "", "", new Date(),);
              }

  ngOnInit() {
  }

  guardar() {
    console.log(this.inmunologia);
    //insertando
  
    this._inmunologiaService
      .crearReactivo( this.inmunologia)
        .subscribe( data => {
      this.router.navigate(['/inmunologia', data])
    }, error => console.log(error));
/*
    let params: any = this.inmunologia;
    console.log(params);
      */
  }

}

