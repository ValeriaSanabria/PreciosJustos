import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProvinciaSelectComponent } from './provincia-select/provincia-select.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { P404Component } from './p404/p404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'provincia/:nombreProvincia/articulo', component: ArticulosListComponent},
  {path: 'provincia', component: ProvinciaSelectComponent},
// {path: 'articulo', component: ArticulosListComponent},
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
