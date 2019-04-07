import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError  } from 'rxjs';
import { parasitologia } from "../models/parasitologia";
import { headersToString } from 'selenium-webdriver/http';
import 'rxjs/Rx';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ParasitologiaService {
  private parasitologia:parasitologia[]= [];
  private url: string;

  // mdb_url = 'mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos';
   //mdb_url = 'mongodb://127.0.0.1:27017/medicamentos';

  constructor(private httpClient: HttpClient) {
    this.url = GLOBAL.url;
   }

  // metodo obtener lista
  obtenerListaParasitologia() {
    let header = new HttpHeaders ( {
      "Content-Type": "application/json"
    });
   // mongodb://a-rubiel:enrique24@ds157735.mlab.com:57735/medicamentos'
   return this.httpClient.get(this.url+'/parasitologia/listar', {headers:header});
   //return this.httpClient.get("http://10.8.73.235:3300/parasitologia/listar", {headers:header});
  }

  //metodo crear reactivo
  crearReactivo(reactivo:parasitologia){
    let json = JSON.stringify(reactivo);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.url+'/parasitologia/crear', json, {headers:headers})
   // return this.httpClient.post("http://10.8.73.235:3300/parasitologia/crear", json, { headers: headers })
      .pipe(
            map(res => {
      console.log(res);
       return res;
            }));
  }
  //metodo actualizar reactivo
  editarReactivo (id:string, reactivo:parasitologia) {
    let json = JSON.stringify(reactivo);
    let params = json;
    let header = new HttpHeaders ({
      'Content-Type': 'application/json',
     // 'Authorization': ""
    });
    return this.httpClient.put(this.url+'/parasitologia/editar/'+ id, params, {headers: header})
    //return this.httpClient.put("http://10.8.73.235:3300/parasitologia/editar" + id, json, {headers: Header})
    .map(res => res);
  }

//get del id de registro
getReactivo(id: any){
  let json = JSON.stringify(id);
  let data = json;
  let header = new HttpHeaders ({
    'Content-Type': 'application/json'
   // 'Authorization': ""
  });
    return this.httpClient.post(this.url+'/parasitologia/filtrar', data, {headers: header}).map(res => res);
 // return this.httpClient.get("http://10.8.73.235:3300/parasitologia/filtrar/"+ id, {headers: Header});
}

//eliminar reactivo
eliminarReactivo(id) {
 let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    })
    return this.httpClient.delete(this.url+'/parasitologia/eliminar/' + id  );
  //return this.httpClient.delete("http://10.8.73.235:3300/parasitologia/eliminar/" + id  );

}

}
