import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material1Component } from './material1/material1.component';
import { Material2Component } from './material2/material2.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    Material1Component,
    Material2Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PrincipalModule { }
