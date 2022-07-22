import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { FlexLayoutModule }     from '@angular/flex-layout';
import { HeroesRoutingModule }  from './heroes-routing.module';
import { MaterialModule }       from '../material/material.module';

import { AgregarComponent }     from './pages/agregar/agregar.component';
import { BuscarComponent }      from './pages/buscar/buscar.component';
import { ConfirmarComponent }   from './components/confirmar/confirmar.component';
import { HeroeComponent }       from './pages/heroe/heroe.component';
import { HomeComponent }        from './pages/home/home.component';
import { ListadoComponent }     from './pages/listado/listado.component';
import { HeroeTarjetaComponent }from './components/heroe-tarjeta/heroe-tarjeta.component';

import { ImagePipe } from './pipes/imagePipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ConfirmarComponent,
    
    //! pipes
    ImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroesModule { }
