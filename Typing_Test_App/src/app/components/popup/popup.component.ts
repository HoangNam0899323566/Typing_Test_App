import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent{
  inputData: any;
  cloudMessage: string = 'Next Exams';
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>, private http:HttpClient){}

  ngOnInit(): void {
    this.inputData = this.data;
    console.log(this.inputData);
    
  }

  async closePopup(){
    this.ref.close("closed");
    await firstValueFrom(this.http.get('./assets/data/data.json'))
    .then((data: any) => {
      console.log(data);
    })
    .catch((e: any) => {
      console.log(e);
    })
  }
}
