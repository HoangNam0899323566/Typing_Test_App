import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-luyen-tap',
  templateUrl: './luyen-tap.component.html',
  styleUrls: ['./luyen-tap.component.css']
})
export class LuyenTapComponent {
  examsId: number = 0;
  exams: string = '';
  currentTime: string = '00:00';
  seconds: number = 0;
  minutes: number = 0;
  pause: boolean = false;
  intervalId: any;
  user: any;
  lastTime: string = '00:00';
  score: number | undefined;
  exercise: string | undefined;
  matchCount: number = 0;

  ngOnInit(): void {
    this.init();
    this.examsId = history.state.id;
    this.exams = history.state.exams;
  }

  constructor(private http:HttpClient, private dialog:MatDialog){}

  async init(){
    var userId = localStorage.getItem('user');
    await firstValueFrom(this.http.get('https://localhost:7126/api/UserControllers/' + userId))
    .then((data: any) => {
      this.user = data;
    })
    .catch((e: any) => alert(e));
  }

  async setPractices(){
    var now = formatDate(new Date(), 'yyyy-MM-ddThh:mm:ss', 'en');

    await firstValueFrom(this.http.post('https://localhost:7126/api/ExamsControllers/', {
      score: this.score,
      userName: this.user.userName,
      idStudent: this.user.idStudent,
      course: "yuna.id.vn",
      createdDate: now,
      speed: this.getSpeed(),
      time: this.lastTime
    }))
    .then((data: any) => {})
    .catch((e: any) => console.log(e));
  }

  clock(){
    this.pause = !this.pause;
    if(this.pause){
      this.intervalId = setInterval(() => {
        this.updateTime();
      }, 1000);
    }else{
      clearInterval(this.intervalId);
    }
  }

  updateTime() {
    this.seconds++;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes > 59) {
        this.pause = true;
        return;
      }
    }
    this.currentTime = this.lastTime = `${this.padNumber(this.minutes)}:${this.padNumber(this.seconds)}`;
  }

  padNumber(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  refreshTimmer(){
    this.currentTime = '00:00';
    if(this.pause){
      this.pause = false;
      this.seconds = 0;
      this.minutes = 0;
      clearInterval(this.intervalId);
    }
  }

  nextExams(){
    if(this.examsId >= this.exams.length - 1){
      this.examsId = 0;
    }else{
      this.examsId++;
    }
    this.refreshTimmer();
  }
  
  check(){
    if(this.lastTime == '00:00' || this.minutes == 0 && this.seconds == 0){
      return 'cheat';
    }else if(this.minutes == 5){
      return 'time out';
    }else{
      return 'valid';
    }
  }

  openPopup() {
    var check = this.check();
    if(check == 'cheat' || check == 'time out'){
      this.dialog.open(PopupComponent, {
        width: '60%',
        height: '400px',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '500ms',
        data: {
          title: 'Kết quả',
          cheat: true,
        }
      });
      return;
    }
    var _popup = this.dialog.open(PopupComponent, {
      width: '60%',
      height: '400px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      data: {
        title: 'Kết quả',
        score: this.scoreCalculator(),
        time: this.lastTime,
        speed: this.getSpeed().slice(0,8),
        accuracy: this.getAccuracy(),
      }
    });

    _popup.afterClosed().subscribe((item: any) => {
      if(item == 'Next Exams'){
        this.nextExams();
        this.seconds = 0;
        this.minutes = 0;
        this.setPractices();
      }
    })
  }

  getSpeed(){
    if(this.exercise == undefined){
      return '0 Wpm';
    }
    return (this.exercise.length / this.minutes).toString() + 'Wpm';
  }

  getAccuracy(){
    return (Math.max(Math.round((this.matchCount / this.exams[this.examsId].length) * 100), 2)).toString() + '%';
  }

  scoreCalculator() {
    if(this.exercise == undefined){
      return this.score = 0;
    }
    const length = Math.max(this.exercise!.length, this.exams[this.examsId].length);
    this.matchCount = 0;

    for (let i = 0; i < length; i++) {
      if (this.exercise![i] === this.exams[this.examsId][i]) {
        this.matchCount++;
      }
    }

    const similarityPercentage = (this.matchCount / length) * 100;

    this.score = Math.max(Math.round(similarityPercentage), 0);
    
    return this.score;
  }
}
