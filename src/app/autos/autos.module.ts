import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoAutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class AutosModule { }
