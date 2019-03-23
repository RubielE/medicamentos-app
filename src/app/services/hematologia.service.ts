import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError  } from 'rxjs';
import { hematologia } from "../models/hematologia";
import { headersToString } from 'selenium-webdriver/http';
import 'rxjs/Rx';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class HematologiaService {

  private hematologia:hematologia[]= [];
  private url: string;

  // mdb_url = 'mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos';
   //mdb_url = 'mongodb://127.0.0.1:27017/medicamentos';

  constructor( private httpClient: HttpClient) {
this.url = GLOBAL.url;
  }

  // metodo obtener lista
  obtenerListaHematologia() {
    let header = new HttpHeaders ( {
      "Content-Type": "application/json"
    });
   // mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos'
   return this.httpClient.get(this.url+'/hematologia/listar', {headers:header});
   //return this.httpClient.get("http://10.8.73.235:3300/hematologia/listar", {headers:header});
  }

  //metodo crear reactivo
  crearReactivo(reactivo:hematologia){
    let json = JSON.stringify(reactivo);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.url+'/hematologia/crear', json, {headers:headers})
   // return this.httpClient.post("http://10.8.73.235:3300/hematologia/crear", json, { headers: headers })
      .pipe(
            map(res => {
      console.log(res);
       return res;
            }));
  }
  //metodo actualizar reactivo
  editarReactivo (id:string, reactivo:hematologia) {
    let json = JSON.stringify(reactivo);
    let params = json;
    let header = new HttpHeaders ({
      'Content-Type': 'application/json',
     // 'Authorization': ""
    });
    return this.httpClient.put(this.url+'/hematologia/editar/'+ id, params, {headers: header})
    //return this.httpClient.put("http://10.8.73.235:3300/hematologia/editar" + id, json, {headers: Header})
    .map(res => res);
  }

//get del id de registro
getReactivo(id: string){
  var data = [];
    return this.httpClient.post('/hematologia/filtrar/'+ id, data).map(res => res);
 // return this.httpClient.get("http://10.8.73.235:3300/hematologia/filtrar/"+ id, {headers: Header});
}

//eliminar reactivo
eliminarReactivo(id) {
 let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    })
    return this.httpClient.delete('/hematologia/eliminar/' + id  );
  //return this.httpClient.delete("http://10.8.73.235:3300/hematologia/eliminar/" + id  );

}

}
