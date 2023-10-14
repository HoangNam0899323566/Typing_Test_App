import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TrangChuComponent } from './components/trang-chu/trang-chu.component';
import { LuyenTapComponent } from './components/luyen-tap/luyen-tap.component';
import { KiemTraComponent } from './components/kiem-tra/kiem-tra.component';
import { ThanhTichComponent } from './components/thanh-tich/thanh-tich.component';
import { PracticesComponent } from './components/practices/practices.component';
import { CheckComponent } from './components/check/check.component';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TrangChuComponent,
    LuyenTapComponent,
    KiemTraComponent,
    ThanhTichComponent,
    PracticesComponent,
    CheckComponent,
    PopupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
