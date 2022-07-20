import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material componentes
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntlEs } from '../usuarios/MatPaginatorIntlEs'; //para lenguaje paginator

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl,useClass: MatPaginatorIntlEs} //para lenguaje paginator
  ]
})
export class MaterialModule { }
