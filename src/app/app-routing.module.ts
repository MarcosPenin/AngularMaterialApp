import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';

const routes:Routes=[
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:"hotels",
    loadChildren:()=>import("./hotels/hotels.module").then(m=>m.HotelsModule)
  },
  {
    path:"404",
    component:ErrorPageComponent
  },
  {
    path:"**",
    redirectTo:"hotels/list"
  },
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

 
})
export class AppRoutingModule { }
