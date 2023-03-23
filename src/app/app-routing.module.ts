import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FavouritesFaceSnapComponent } from './favourites-face-snap/favourites-face-snap.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path:'facesnaps/:id', component:SingleFaceSnapComponent},
  { path: 'facesnaps', component: FaceSnapListComponent },
  {path:'favourites',component:FavouritesFaceSnapComponent},
  { path: '', component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
