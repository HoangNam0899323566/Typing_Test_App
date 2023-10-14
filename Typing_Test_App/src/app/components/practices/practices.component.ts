import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent {
  practices: any = [];
  
  constructor(private router:Router, private http:HttpClient){
    this.init();
  }

  navigateToTest(index: number){
    this.router.navigate(['/luyen-tap'], {
      state: {
        id: index,
        exams: this.practices
      }
    })
  }

  async init(){
    await firstValueFrom(this.http.get('./assets/data/data.json'))
    .then((data: any) => {
      this.practices = data.exams.test.normal;
    }).catch((err) => alert(err));
  }
}
