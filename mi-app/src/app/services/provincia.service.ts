import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getProvincias() {
    return this.http.get('./assets/api/provincias.json').pipe(
      map((data: any) => {
        return data.map((provincia: any) => {
          let respuesta = {
            ...provincia,
            url: provincia.api,
          };
          delete respuesta.api;

          return respuesta;
        });
      })
    );
  }
}
