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
 //URL:string = "http://10.8.73.235:3300/medicamentos"

  constructor(private httpClient: HttpClient) { }

  // metodo obtener lista
  obtenerListaMedicamentos() {
    let header = new HttpHeaders ( {
      "Content-Type": "application/json"
    });
    return this.httpClient.get("http://10.8.73.235:3300/medicamentos/listar", {headers:header});
  }

  //metodo crear medicamento
  crearMedicamento(medicamento:Medicamentos){
    let json = JSON.stringify(medicamento);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.httpClient.post("http://10.8.73.235:3300/medicamentos/crear", json, { headers: headers })
      .pipe(
            map(res => {
      console.log(res);
       return res;
            })); 
  }
  
  //metodo actualizar medicamento
  actualizarMedicamento (id:string, medicamento:Medicamentos) {
    let json = JSON.stringify(medicamento);
    let params = json;
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    })
    return this.httpClient.put("http://10.8.73.235:3300/medicamentos/editar" + id, json, {headers: Header})
    .pipe(
          map(res => {
            console.log(res);
            return res;
    }));
    
    
  }

//get del id de registro
getMedicamento(id){
  let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    }) ;
  return this.httpClient.get("http://10.8.73.235:3300/medicamentos/filtrar/"+ id, {headers: Header});
}

//eliminar medicamento
eliminarMedicamento(id) {  
 let json = JSON.stringify(id);
    let Header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': ""
    }) 
  return this.httpClient.delete("http://10.8.73.235:3300/medicamentos/eliminar/" + id  );

}

}
