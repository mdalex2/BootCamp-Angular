import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';
import { AgregarAutoComponent } from './agregar-auto/agregar-auto.component';
import { AutoService } from './auto.service';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoAutosComponent,
    AgregarAutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers:[
    AutoService
  ]
})
export class AutosModule { }
