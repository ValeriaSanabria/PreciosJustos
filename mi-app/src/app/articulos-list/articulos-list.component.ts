import {
  Component,
  OnInit
} from '@angular/core';
import {
  ArticulosService
} from '../services/articulos.service';
import {
  ActivatedRoute
} from '@angular/router';
import { Location } from '@angular/common';

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
  // lista completa de productos - backup
  articulos: Articulo[] = [];
  // lista de productos filtrados, que le muestro usuarios
  articulosFiltrados: Articulo[] = [];
  provinciaSlctd: string = 'tierra-del-fuego';
  filtroTexto: string = "";
  filtroPrecio: number = 0;
  precioMaximo: number = 1000;

  constructor(articulosSrv: ArticulosService,actRoute: ActivatedRoute,private location: Location) {
    const { nombreProvincia } = actRoute.snapshot.params;

    this.provinciaSlctd = nombreProvincia;

    articulosSrv.getArticulos(nombreProvincia).subscribe((data: any) => {
      this.articulos = data;
      this.articulosFiltrados = data;
      // actualizar la variable que contiene el precio maximo de los productos
      this.precioMaximo = Math.max(...this.articulos.map((articulo) => articulo.precio)) + 1;
      this.filtroPrecio = this.precioMaximo;
    });
  }
  goBack() {
    this.location.back();
  }
  onFiltroTextoChange(parametroIngresado: any) {
    this.articulosFiltrados = this.articulos.filter((articulo) => {
      if (this.filtroPrecio != 0){
        // esto significa que el usuario ingreso filtro
        // tengo que filtrar por nombre y codigo y ademas por precio
        return (articulo.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
            || (articulo.ean + '').includes(parametroIngresado)) && articulo.precio <= this.filtroPrecio;
      }
      else{
        // solo filtro por nombre y por codigo
        return articulo.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
          || (articulo.ean + '').includes(parametroIngresado);
      }
    });
  }

  onFiltroPrecioChange(parametroIngresado: any) {
    this.articulosFiltrados = this.articulos.filter((articulo) => {
      if (this.filtroTexto != ""){
        return articulo.precio <= parametroIngresado && (
          articulo.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase())
            || (articulo.ean + '').includes(this.filtroTexto)
        )
      }
      else{
        return articulo.precio <= parametroIngresado;
      }
    })
  }

  ngOnInit(): void {}
}