import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbumComponent } from './pages/album/album.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'album',
    component: AlbumComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
