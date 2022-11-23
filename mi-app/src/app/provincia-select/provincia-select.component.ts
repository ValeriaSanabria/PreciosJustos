import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia-select',
  templateUrl: './provincia-select.component.html',
  styleUrls: ['./provincia-select.component.css']
})
export class ProvinciaSelectComponent implements OnInit {
  // defino lo que pongo en el p del html entre corchetes
  // le doy un valor predeterminado con any
  idSeleccionado:any = {
    "id": 0,
    "nombre": "",
    "imagen": ""
  };

  provincias: any[] = [
    {id: 1, nombre: 'Buenos Aires', imagen: "buenos-aires.png"},
    {id: 2, nombre: 'CABA'},
    {id: 3, nombre: 'Catamarca'},
    {id: 4, nombre: 'Corrientes'},
    {id: 5, nombre: 'Misiones'},
    {id: 6, nombre: 'Formosa'},
    {id: 7, nombre: 'Chaco'},
    {id: 8, nombre: 'Chubut'},
    {id: 9, nombre: 'Rio Negro'},
    {id: 10, nombre: 'Santa Cruz'},
    {id: 11, nombre: 'Santa Fe'},
    {id: 12, nombre: 'Santiago del Estero'},
    {id: 13, nombre: 'Cordoba'},
    {id: 14, nombre: 'Jujuy'},
    {id: 15, nombre: 'Salta'},
    {id: 16, nombre: 'Neuquen'},
    {id: 17, nombre: 'Tierra del Fuego'},
    {id: 18, nombre: 'Mendoza'},
    {id: 19, nombre: 'La Pampa'},
    {id: 20, nombre: 'La Rioja'},
    {id: 21, nombre: 'Tucuman'},
    {id: 22, nombre: 'Entre Rios'},
    {id: 23, nombre: 'San Juan'},
    {id: 24, nombre: 'San Luis'},
    ];

    selected: any = {
      "id": 0,
      "nombre": ""
    }

// evento para actualizar el id cada vez que elijo una provincia, funcion para que funcione el html
    onChange(target:any){
      console.log(target);
      console.log(target.nombre);
      // this.idSeleccionado = target.value;
      // para buscar el filtro por id de this.provincias
      this.idSeleccionado = this.provincias.find((p) => p.id == target.value);
      console.log(this.idSeleccionado)
    }
  constructor() { }

  ngOnInit(): void {
    fetch('https://panalsoft.com/precios-justos/api/v1/provincias.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      // this.provincias = data.provincias;
    });
  }


}
