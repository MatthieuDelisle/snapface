import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-favourites-face-snap',
  templateUrl: './favourites-face-snap.component.html',
  styleUrls: ['./favourites-face-snap.component.scss']
})
export class FavouritesFaceSnapComponent {

  constructor(private faceSnapsService : FaceSnapsService){
  }
  
  favouriteSnaps! : FaceSnap[];
  
  ngOnInit(): void{
    this.favouriteSnaps = this.faceSnapsService.getFavouritesFaceSnaps();

  }


}
