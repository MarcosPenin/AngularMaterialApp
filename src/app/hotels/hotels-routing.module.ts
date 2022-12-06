import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { RoomSearchComponent } from './pages/roomSearch/room-search.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';



const routes:Routes=[
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"list",
        component:ListadoComponent
      },
      {
        path:"roomSearch/:id",
        component:RoomSearchComponent
      },
      {
        path:"map",
        component:MapComponent
      },
      {
        path:"**",
        redirectTo:"list"
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HotelsRoutingModule { }
