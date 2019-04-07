import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nat } from '../../../../models/nat';
import { NatService } from '../../../../services/nat.service';

@Component({
  selector: 'app-nat-crear',
  templateUrl: './nat-crear.component.html',
  styleUrls: ['./nat-crear.component.css']
})
export class NatCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public nat: nat;
  public ide: any;

  constructor( 
      private natservice: NatService ,
      private router: Router) { 
        this.nat = new nat("", "", "", new Date(),);
      }

  ngOnInit() {
  }

  guardar(){
    console.log(this.nat);
    //insertando
    this.natservice.crearReactivo(this.nat)
      .subscribe( data => {
        this.router.navigate(['/nat', data])
      }, error =>  console.log(error));
  }

}

