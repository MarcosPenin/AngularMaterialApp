import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { RoomPicPipe } from './pipes/roomPic.pipe';
import { NoroomsdialogComponent } from './components/noroomsdialog/noroomsdialog.component';
import { BookigcompleteComponent } from './components/bookigcomplete/bookigcomplete.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    RoomCardComponent,
    ImagenPipe,
    RoomPicPipe,
    ConfirmarComponent,
    RoomCardComponent,
    NoroomsdialogComponent,
    BookigcompleteComponent
  
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class HeroesModule { }
