import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService) { }

  snapArray! : FaceSnap[]; 

  ngOnInit() : void{
      
    this.snapArray = this.faceSnapsService.getAllFaceSnaps();
    
}
}
