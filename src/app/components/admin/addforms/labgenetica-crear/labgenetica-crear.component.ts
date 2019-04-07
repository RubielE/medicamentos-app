import { Component, OnInit } from '@angular/core';
import { labgenetica } from '../../../../models/labgenetica';
import { LabgeneticaService } from '../../../../services/labgenetica.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-labgenetica-crear',
  templateUrl: './labgenetica-crear.component.html',
  styleUrls: ['./labgenetica-crear.component.css']
})
export class LabgeneticaCrearComponent implements OnInit {
  public nuevo: boolean = false;
  public labgenetica: labgenetica;
  public id:any;

  constructor(
              private _labgeneticaService: LabgeneticaService,
              private router: Router) {
                this.labgenetica = new labgenetica("", "", "", new Date(),);
               }


  ngOnInit() {
    
  }

  guardar() {
    console.log(this.labgenetica);
    //insertando
    this._labgeneticaService
      .crearReactivo( this.labgenetica)
        .subscribe( data => {
      this.router.navigate(['/labgenetica', data])
    }, error => console.log(error));
/*
    let params: any = this.labgenetica;
    console.log(params);
      */
  }

}



