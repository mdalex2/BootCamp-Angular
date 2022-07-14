import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Material1Component } from './principal/material1/material1.component';
import { HomeComponent } from './principal/home/home.component';
import { Material2Component } from './principal/material2/material2.component';

const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch: 'full'},
  {path: 'material1',component: Material1Component},
  {path: 'material2',component: Material2Component},
  {path: '**',redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
