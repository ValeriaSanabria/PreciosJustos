import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciaSelectComponent } from './provincia-select/provincia-select.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component'
import { ProvinciaService } from './services/provincia.service';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciaSelectComponent,
    HeaderComponent,
    ArticulosListComponent,
    HomeComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProvinciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
