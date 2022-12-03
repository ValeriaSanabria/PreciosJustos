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

  constructor(productosSrv: ArticulosService,
    actRoute: ActivatedRoute) {
    const {
      nombreProvincia
    } = actRoute.snapshot.params;

    this.provinciaSlctd = nombreProvincia;
    
    productosSrv.getArticulos(nombreProvincia).subscribe((data: any) => {
      this.articulos = data;
    });


    // this.provinciaSlctd = id;
  }

  ngOnInit(): void {}

}
