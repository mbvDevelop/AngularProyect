import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homePage-routing.module';
import { HomePageComponent } from './HomePage/homePage.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
