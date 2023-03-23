import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  animations:[]
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService,
              private router:Router) { }
  
  @Input() faceSnap!: FaceSnap;

  buttonClicked!:boolean;
  buttonText!:string;
  ngOnInit() {
    this.buttonClicked= true;
    this.buttonText = "Snap!"
   

  }

  onView(){
    this.router.navigateByUrl('facesnaps/'+this.faceSnap.id);
  }

  onFav(){
    if(!this.faceSnap.isFavourite){
      this.faceSnap.isFavourite=true;
    }else{
      this.faceSnap.isFavourite=false;
    }
  }
}
