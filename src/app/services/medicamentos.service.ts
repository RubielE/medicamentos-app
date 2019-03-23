import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError  } from 'rxjs';
import { Medicamentos } from "../models/medicamentos";
import { headersToString } from 'selenium-webdriver/http';
import 'rxjs/Rx';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

private medicamentos:Medicamentos[]= [];
private url: string;

// mdb_url = 'mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos';
 //mdb_url = 'mongodb://127.0.0.1:27017/medicamentos';

  constructor(private httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // metodo obtener lista
  obtenerListaMedicamentos() {
    let header = new HttpHeaders ( {
      "Content-Type": "application/json"
    });
   // mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos'
   return this.httpClient.get(this.url+'/medicamentos/listar', {headers:header});
   //return this.httpClient.get("http://10.8.73.235:3300/medicamentos/listar", {headers:header});
  }

  //metodo crear medicamento
  crearMedicamento(medicamento:Medicamentos){
    let json = JSON.stringify(medicamento);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.url+'/medicamentos/crear', json, {headers:headers})
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
    return this.httpClient.put(this.url+'/medicamentos/editar/'+ id, params, {headers: header})
    //return this.httpClient.put("http://10.8.73.235:3300/medicamentos/editar" + id, json, {headers: Header})
    .map(res => res);
  }

//get del id de registro
getMedicamento(id: string){
  var data = [];
    return this.httpClient.post(this.url+'/medicamentos/filtrar/'+ id, data).map(res => res);
 // return this.httpClient.get("http://10.8.73.235:3300/medicamentos/filtrar/"+ id, {headers: Header});
}

//eliminar medicamento
eliminarMedicamento(id) {  
 let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    }) 
    return this.httpClient.delete(this.url+'/medicamentos/eliminar/' + id  );
  //return this.httpClient.delete("http://10.8.73.235:3300/medicamentos/eliminar/" + id  );

}

}
