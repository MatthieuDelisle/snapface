import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap.model';
import {interval, map, Observable, filter, tap} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  snapArray! : FaceSnap[]; 
  interval$: Observable<string> | undefined;

  ngOnInit(){
    this.interval$ = interval(1000).pipe(
      filter(value=>value%3===0),
      map(value => value %2 === 0 ?
      `Je suis ${value} et je suis pair` :
      `Je suis ${value} et je suis impair`),
      tap(text=> this.logger(text))

  );  
  }
  ngOnDestroy(){
    
  }
  logger(text: string): void {
    console.log(`Log: ${text}`);
}

}
