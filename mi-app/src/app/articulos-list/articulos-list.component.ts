import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

export interface Articulo {
  ean: number,
  nombre: string,
  precio: number
}

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css']
})
export class ArticulosListComponent implements OnInit {
  articulos: Articulo[] = []
  provinciaSlctd: string = "catamarca";

  constructor(productosSrv: ArticulosService) {
    productosSrv.getArticulos(this.provinciaSlctd).subscribe((data: any) => {
      this.articulos = data;
    });
  }

  ngOnInit(): void {
  }

}
