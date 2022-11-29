import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  getArticulos(provincia:string) {
    return this.http.get('./assets/api/' + provincia +'.json')
      .pipe(
        map((data: any) => {
          // aca transformo datos
          data.values.shift()
          data.values.shift()

          return data.values.map((articulo:any) => {
            let precioTemp = articulo[2]
              .replace('.', '')
              .replace(',', '.')
            return {
              ean: parseInt(articulo[0]),
              nombre: articulo[1],
              precio: parseFloat(precioTemp),
            }
          })
        })
      )
  }
}
