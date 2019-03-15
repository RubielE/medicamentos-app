import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError  } from 'rxjs';
import { Medicamentos } from "../models/medicamentos";
import { headersToString } from 'selenium-webdriver/http';
import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

private medicamentos:Medicamentos[]= [];
private uri: string;

// mdb_url = 'mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos';
 //mdb_url = 'mongodb://127.0.0.1:27017/medicamentos';

  constructor(private httpClient: HttpClient) {
    this.uri = 'https://farmacia01.herokuapp.com/medicamentos/';
  }

  // metodo obtener lista
  obtenerListaMedicamentos() {
    let header = new HttpHeaders ( {
      "Content-Type": "application/json"
    });
   // mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos'
   return this.httpClient.get("https://farmacia01.herokuapp.com/medicamentos/listar", {headers:header});
   //return this.httpClient.get("http://10.8.73.235:3300/medicamentos/listar", {headers:header});
  }

  //metodo crear medicamento
  crearMedicamento(medicamento:Medicamentos){
    let json = JSON.stringify(medicamento);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.httpClient.post("https://farmacia01.herokuapp.com/medicamentos/crear", json, {headers:headers})
   // return this.httpClient.post("http://10.8.73.235:3300/medicamentos/crear", json, { headers: headers })
      .pipe(
            map(res => {
      console.log(res);
       return res;
            })); 
  }
  //metodo actualizar medicamento
  editarMedicamento (id:string, medicamento:Medicamentos) {
    let json = JSON.stringify(medicamento);
    let params = json;
    let header = new HttpHeaders ({
      'Content-Type': 'application/json',
     // 'Authorization': ""
    });
    return this.httpClient.put("https://farmacia01.herokuapp.com/medicamentos/editar/"+ id, params, {headers: header})
    //return this.httpClient.put("http://10.8.73.235:3300/medicamentos/editar" + id, json, {headers: Header})
    .map(res => res);
  }

//get del id de registro
getMedicamento(id: string){
  var data = [];
    return this.httpClient.post("https://farmacia01.herokuapp.com/medicamentos/filtrar/"+ id, data).map(res => res);
 // return this.httpClient.get("http://10.8.73.235:3300/medicamentos/filtrar/"+ id, {headers: Header});
}

//eliminar medicamento
eliminarMedicamento(id) {  
 let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    }) 
    return this.httpClient.delete("https://farmacia01.herokuapp.com/medicamentos/eliminar/" + id  );
  //return this.httpClient.delete("http://10.8.73.235:3300/medicamentos/eliminar/" + id  );

}

}
