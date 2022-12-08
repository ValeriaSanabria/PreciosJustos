import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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

  provinciaSlctd: Provincia = {
    id: 0,
    nombre: '',
    url: '',
  };

  constructor(private provSrv: ProvinciaService,
    private location: Location,
  private  router :Router) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  ngOnInit(): void {}

  handleOnClickButton() {
    // this.router.navigateByUrl(
    //   `/provincia/${this.provinciaSlctd.url
    //     .toLowerCase()
    //     .replace(/ /g, '-')}/articulos`
    // );

    this.router.navigateByUrl(
      `/provincia/${this.provinciaSlctd.url}/articulos`
    );
  }
}