import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../services/provincia.service';

export interface Provincia {
  id: number;
  nombre: string;
  api: string;
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

  provinciaSlctd: Provincia = {
    id: 0,
    nombre: '',
    api: '',
  };

  constructor(private provSrv: ProvinciaService) {
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
}