import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomSearchComponent } from './pages/roomSearch/room-search.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { ImagenPipe } from './pipes/hotelPic.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { RoomPicPipe } from './pipes/roomPic.pipe';
import { NoroomsdialogComponent } from './components/noroomsdialog/noroomsdialog.component';
import { BookigcompleteComponent } from './components/bookingcomplete/bookingcomplete.component';




@NgModule({
  declarations: [
    RoomSearchComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    RoomCardComponent,
    HotelCardComponent,
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
