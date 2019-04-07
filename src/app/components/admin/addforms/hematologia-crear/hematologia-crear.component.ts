import { Component, OnInit } from '@angular/core';
import { hematologia } from '../../../../models/hematologia';
import { HematologiaService } from '../../../../services/hematologia.service';
import { Router } from "@angular/router";
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-hematologia-crear',
  templateUrl: './hematologia-crear.component.html',
  styleUrls: ['./hematologia-crear.component.css']
})
export class HematologiaCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public hematologia: hematologia;
  public id:any;

  constructor(
              private _hematologiaService: HematologiaService,
              private router: Router) { 
                this.hematologia = new hematologia("", "", "", new Date(),);
              }

  ngOnInit() {
    
  }

  guardar() {
    console.log(this.hematologia);
    //insertando
    this._hematologiaService
      .crearReactivo( this.hematologia)
        .subscribe( data => {
      this.router.navigate(['/hematologia', data])
    }, error => console.log(error));
/*
    let params: any = this.hematologia;
    console.log(params);
      */
  }

  

}

