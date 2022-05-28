import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  campoRequerido: string = '';
  objNuevo: IAuto = {
    marca: "",
    modelo: "",
    precio: 0
  }

  lstAutos: IAuto[] = [
    {marca:"Toyota",modelo:"Yaris1",precio: 1000},
    {marca:"Toyota1",modelo:"Yaris2",precio: 2000},
    {marca:"Toyota2",modelo:"Yaris3",precio: 3000},
    {marca:"Toyota3",modelo:"Yaris4",precio: 4000},
    {marca:"Toyota4",modelo:"Yaris5",precio: 5000},
  ];

  agregar(){
    this.campoRequerido = '';
    if (this.objNuevo.marca === undefined || this.objNuevo.modelo === undefined || this.objNuevo.precio === 0)
    {
      this.campoRequerido = 'Debe ingresar los valores requeridos';
      return;
    }
    this.lstAutos.push(this.objNuevo);
    this.objNuevo = { marca: '', modelo: '', precio: 0 };

  }
  constructor() { }

  ngOnInit(): void {
  }

}
