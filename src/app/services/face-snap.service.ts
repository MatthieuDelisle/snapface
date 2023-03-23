import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    snapArray: FaceSnap[] = [
            {
            id:1,
            title : 'Archibald',
            description : 'Mon meilleur ami depuis tout petit !',
            imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate : new Date(),
            snaps : 18,
            isFavourite: false,
          },{
            id:2,
            title : 'Titouan',
            description : 'Un zèbre random',
            imageUrl : 'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg',
            createdDate : new Date(),
            snaps : 173,
            location: 'Afrique',
            isFavourite:false,
          },{
            id:3,
            title : 'Mormon',
            description : 'Mon chat de fou',
            imageUrl : 'https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg',
            createdDate : new Date(),
            snaps : 264,
            isFavourite:false,
          }
        ];
        getAllFaceSnaps(): FaceSnap[] {
          return this.snapArray;
      }

      getFavouritesFaceSnaps():FaceSnap[]{
        var newArray = [];        
        for(let i=0;i<this.snapArray.length;i++){
          if(this.snapArray[i].isFavourite){
            newArray.push(this.snapArray[i]);
          }
        }
        return newArray;
      }

      getFaceSnapById(faceSnapId : number){
        const faceSnap = this.snapArray.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap){
          return faceSnap;
        }else{
          throw new Error('FaceSnap not found');
        }
      }

      changeFaceSnapTitle(faceSnapId : number, newTitle : string){
        const faceSnap = this.getFaceSnapById(faceSnapId);
        if(newTitle!=undefined){
          faceSnap.title = newTitle;
        }
      }

      snapFaceSnapById(faceSnapId : number, snapType : 'snap' | 'unsnap'):void{
        const faceSnap = this.snapArray.find(faceSnap => faceSnap.id === faceSnapId);
        if ( faceSnap){
          snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        }else{
          throw new Error('FaceSnap not found');
        }
      }
}