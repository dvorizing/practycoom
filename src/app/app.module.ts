import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Workbook } from 'exceljs'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    NoopAnimationsModule,
    MatCardModule,
    // Workbook,
    MatButtonModule,  BrowserAnimationsModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
