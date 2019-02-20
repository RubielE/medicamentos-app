import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-comercial-generico',
  templateUrl: './comercial-generico.component.html',
  styleUrls: ['./comercial-generico.component.css']
})
export class ComercialGenericoComponent implements OnInit {

  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  dtOption:any;

  constructor( private httpService: HttpClient) { }
  arrComerciales: string [];
  pageActual: number = 1;

  ngOnInit(): void {

    this.dtOption = {
      "pagingType": "numbers",

      "ajax": {
                url: './assets/data/comerciales.json',
                dataType: 'json'
              },
      columns: [
                {
                  title:'Nombre comercial',
                  data: 'comerciales'
                },
                {
                  title:'Nombre genérico',
                  data: 'genericos'
                },
              ]        
    };
this.dataTable = $(this.table.nativeElement);
this.dataTable.dataTable(this.dtOption);


    this.httpService.get('assets/data/comerciales.json').subscribe(
      data => {
        this.arrComerciales = data as string [];
        console.log(this.arrComerciales);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
