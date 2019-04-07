import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parasitologia} from '../../../../models/parasitologia';
import { ParasitologiaService } from '../../../../services/parasitologia.service';

@Component({
  selector: 'app-parasitologia-crear',
  templateUrl: './parasitologia-crear.component.html',
  styleUrls: ['./parasitologia-crear.component.css']
})
export class ParasitologiaCrearComponent implements OnInit {

  public nuevo: boolean = false;
  public parasitologia;
  public id: any;

  constructor(
        private router: Router,
        private parasitologiaService: ParasitologiaService) {
          this.parasitologia = new parasitologia("", "", "", new Date(),);
         }

  ngOnInit() {
  }

guardar(){
  this.parasitologiaService.crearReactivo(this.parasitologia)
    .subscribe( data => {
      this.router.navigate(['/parasitologia', data])

    }, error => console.log(error));
}

}
