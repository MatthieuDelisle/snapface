import { Component, ElementRef, Injectable, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsService } from '../services/face-snap.service';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'editable-text',
  template: `
<div *ngIf="!editing" (click)="editing = true">{{ text }}</div>
    <input #inputText *ngIf="editing" type="text" [(ngModel)]="text" (blur)="onBlur()" (keyup.enter)="onEnter()">
    <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
    `
})

@Injectable({
  providedIn: 'root'
})
export class EditableTextComponent {
  @Input() text!: string;
  @ViewChild('inputText') inputText!: ElementRef;
  editing: boolean = false;
  errorMessage:string = '';

  constructor(private faceSnapService : FaceSnapsService,
              private route : ActivatedRoute,
              private toastr: ToastrService){

  }


  enableEdit() {
    this.editing = true;
    setTimeout(() => {
      this.inputText.nativeElement.focus();
    }, 0);
  }

  onBlur(): void {
    this.checkErrors();

  }

  onEnter(): void {
    this.checkErrors();

  }

  saveText() : void {
    this.editing = false;
    this.text = this.inputText.nativeElement.value;
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnapService.changeFaceSnapTitle(snapId, this.text);
    this.errorMessage = '';
  }

  getText(){
    return this.inputText.nativeElement.value;
  }

  checkErrors(){
    if (!this.text.trim()) {
      this.toastr.error("Veuillez saisir un nom");
      return;
    }else if(this.text.length>15){
      this.toastr.error("Veuillez saisir un nom plus court");
      return;
    }
    this.saveText();
  }

}
