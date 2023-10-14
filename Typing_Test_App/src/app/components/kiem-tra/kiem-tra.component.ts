import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-kiem-tra',
  templateUrl: './kiem-tra.component.html',
  styleUrls: ['./kiem-tra.component.css']
})
export class KiemTraComponent {
  testExams: any = [];

  ngOnInit(): void {
    this.init();
  }

  constructor(private router:Router, private http:HttpClient){}

  navigateToCheck(index: number){
    this.router.navigate(['/check'], {
      state: {
        id: index,
        exams: this.testExams
      }
    })
  }

  async init(){
    await firstValueFrom(this.http.get('./assets/data/data.json'))
    .then((data: any) => {
      this.testExams = data.exams.check.normal;
    }).catch((err) => alert(err));
  }
}
