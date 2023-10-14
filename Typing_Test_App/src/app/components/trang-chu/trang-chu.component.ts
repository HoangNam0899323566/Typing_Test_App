import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent {
  user: any;
  top: any = [
    { idPractice: 1, score: 100, userName: 'Yuna', time: '02:22' },
    { idPractice: 2, score: 90, userName: 'John', time: '02:22' },
    { idPractice: 3, score: 80, userName: 'Alice', time: '02:22' },
  ]
  
  ngOnInit(): void {
    this.user = history.state;
    this.init();
  }

  constructor(private http:HttpClient){}

  async init(){
    await firstValueFrom(this.http.get('https://localhost:7126/api/PracticeControllers/'))
    .then((data: any) => {
      this.top = data.sort((a: any, b: any) => {
        const timeA = a.time.split(':');
        const timeB = b.time.split(':');
        const minutesA = parseInt(timeA[0]) * 60 + parseInt(timeA[1]);
        const minutesB = parseInt(timeB[0]) * 60 + parseInt(timeB[1]);
        return minutesA - minutesB;
      });
      console.log(this.top);
    })
    .catch((e: any) => alert(e))
  }


}
