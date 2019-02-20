import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-lista-oficial',
  templateUrl: './lista-oficial.component.html',
  styleUrls: ['./lista-oficial.component.css']
})
export class ListaOficialComponent implements OnInit {

  @ViewChild('dataTable') table: ElementRef;
  dataTable:any;
  dtOption: any;

  constructor( private httpService: HttpClient) { }
    arrOficiales:string [];
    pageActual: number = 1;

  ngOnInit(): void {

    this.dtOption = {
                      "pagingType": "numbers",

                      "ajax": {
                                url: './assets/data/lista-oficial.json',
                                dataType: 'json'
                              },
                      columns: [
                        {
                        title: 'Listado Oficial de medicamentos C.S.S.',
                        data: 'oficiales'
                        },
                      ]
                    };

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable(this.dtOption);

    this.httpService.get('./assets/data/lista-oficial.json').subscribe(
      data => {
          this.arrOficiales = data as string [];
          console.log(this.arrOficiales);
      },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
    );
  }

}
