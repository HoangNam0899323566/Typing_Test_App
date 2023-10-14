import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrangChuComponent } from './components/trang-chu/trang-chu.component';
import { LuyenTapComponent } from './components/luyen-tap/luyen-tap.component';
import { KiemTraComponent } from './components/kiem-tra/kiem-tra.component';
import { ThanhTichComponent } from './components/thanh-tich/thanh-tich.component';
import { PracticesComponent } from './components/practices/practices.component';
import { CheckComponent } from './components/check/check.component';
import { PopupComponent } from './components/popup/popup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component:TrangChuComponent},
  {path: "luyen-tap", component:LuyenTapComponent},
  {path: "kiem-tra", component:KiemTraComponent},
  {path: "thanh-tich", component:ThanhTichComponent},
  {path: "practices", component:PracticesComponent},
  {path: "check", component:CheckComponent},
  {path: "popup", component:PopupComponent},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
