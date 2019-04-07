import { Component, OnInit } from '@angular/core';
import { labhematologia } from '../../../../models/labhematologia';
import { LabhematologiaService } from '../../../../services/labhematologia.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-labhematologia-crear',
  templateUrl: './labhematologia-crear.component.html',
  styleUrls: ['./labhematologia-crear.component.css']
})
export class LabhematologiaCrearComponent implements OnInit {
  public nuevo: boolean = false;
  public labhematologia: labhematologia;
  public id:any;

  constructor(
              private _labhematologiaService: LabhematologiaService,
              private router: Router) { 
                this.labhematologia = new labhematologia("", "", "", new Date(),);
              }

  ngOnInit() {
    
  }

  guardar() {
    console.log(this.labhematologia);
    //insertando
    this._labhematologiaService
      .crearReactivo( this.labhematologia)
        .subscribe( data => {
      this.router.navigate(['/labhematologia', data])
    }, error => console.log(error));
/*
    let params: any = this.labhematologia;
    console.log(params);
      */
  }

}


