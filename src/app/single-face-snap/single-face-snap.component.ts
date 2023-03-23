import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService,
              private router:Router,
              private route:ActivatedRoute) { }
  
  faceSnap!:FaceSnap; 
  buttonClicked!:boolean;
  buttonText!:string;
  
  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.buttonClicked= true;
    this.buttonText = "Snap!"
    this.faceSnap=this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(){
    if (!this.buttonClicked){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = "Snap!"
      this.buttonClicked=true;
    }else{
      this.buttonText = "Retirer un Snap"
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonClicked=false;
    }
  }
  onBack(){
    this.router.navigateByUrl('facesnaps');

  }

  onFav(){
    if(!this.faceSnap.isFavourite){
      this.faceSnap.isFavourite=true;
    }else{
      this.faceSnap.isFavourite=false;
    }
  }
}
  

