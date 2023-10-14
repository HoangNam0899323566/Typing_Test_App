import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  mssv: string = '';

  ngOnInit(): void {
  }

  constructor(private router:Router, private http:HttpClient){}

  async login(){
    if(this.name == ''){
      alert('Tên sinh viên không được bỏ trống!')
    }else{
      await firstValueFrom(this.http.get('https://localhost:7126/api/UserControllers/'))
      .then((data: any)=>{
        console.log(data);
        
        if(data.length == 0){
          console.log('new');
          this.addNewUser();
        }else{
          data.forEach((e: any) => {
            console.log(e);
            
            if(e.userName.trim() == this.name.trim()){
              localStorage.setItem('user', e.idStudent);
              this.router.navigate(['/home'], {
                state: {
                  data: e,
                  mssv: this.mssv
                }
              });
            }
          });
        }
      })
      .catch((e: any)=> alert(e));
    }
  }

  async addNewUser(){
    await firstValueFrom(this.http.post('https://localhost:7126/api/UserControllers',{
      userName: this.name,
      createdDate: Date.now,
    }))
    .then((data: any) => {
      console.log(data);
      
    })
    .catch((e: any) => {
      alert(e);
      console.log(e);
      
    })
  }
}
