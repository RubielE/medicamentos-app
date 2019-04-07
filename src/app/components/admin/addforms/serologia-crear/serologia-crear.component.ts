import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serologia } from '../../../../models/serologia';
import { SerologiaService } from '../../../../services/serologia.service';


@Component({
  selector: 'app-serologia-crear',
  templateUrl: './serologia-crear.component.html',
  styleUrls: ['./serologia-crear.component.css']
})
export class SerologiaCrearComponent implements OnInit {4

  public nuevo: boolean = false;
  public serologia: serologia;
  public id: any;

  constructor(
      private router: Router,
      private serologiaService: SerologiaService ) {
        this.serologia = new serologia("", "", "", new Date(),);
       }

  ngOnInit() {
  }

  guardar(){
    this.serologiaService.crearReactivo(this.serologia)
      .subscribe( data =>{
        this.router.navigate(['/serologia', data])

      }, error => console.log(error));
  }

}
