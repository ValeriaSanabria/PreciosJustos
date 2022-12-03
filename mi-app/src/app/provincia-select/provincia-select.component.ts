import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciaService } from '../services/provincia.service';

export interface Provincia {
  id: number;
  nombre: string;
  url: string;
}
@Component({
  selector: 'app-provincia-select',
  templateUrl: './provincia-select.component.html',
  styleUrls: ['./provincia-select.component.css'],
})
export class ProvinciaSelectComponent implements OnInit {
  // provincias: string[] = [
  //   'Buenos Aires',
  //   'CABA',
  //   'Catamarca',
  //   'Chaco',
  //   'Chubut',
  //   'Córdoba',
  //   'Corrientes',
  //   'Entre Ríos',
  // ]
  provincias: Provincia[] = [];

  provinciaSlctd: any = {
    id: 0,
    nombre: '',
    api: '',
  };

  constructor(private provSrv: ProvinciaService,
  private  router :Router) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  ngOnInit(): void {
    fetch('./assets/api/provincias.json')
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    console.log(data)
    // this.provincias = data.provincias;
    });
  }

// handleOnClickButton(){
//   this.router.navigateByUrl('/provincia/${this.provinciaSlctd.url}')
//     .toLowerCase()
//     .replace(/ /g, '-')}.articulo)
// },
// }
  
}