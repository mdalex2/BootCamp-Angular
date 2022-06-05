import { Injectable } from '@angular/core';
import { IAuto } from './interfaces/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private _lstAutos: IAuto[] = [
    // {marca:"Toyota",modelo:"Yaris1",precio: 1000},
    // {marca:"Toyota1",modelo:"Yaris2",precio: 2000},
    // {marca:"Toyota2",modelo:"Yaris3",precio: 3000},
    // {marca:"Toyota3",modelo:"Yaris4",precio: 4000},
    // {marca:"Toyota4",modelo:"Yaris5",precio: 5000},
  ];



  public get autos() : IAuto[] {
    return  this._lstAutos;
  }

  agregarAuto(auto: IAuto){
    this.autos.push(auto);
    localStorage.setItem('autos',JSON.stringify(this._lstAutos)); // con esto lo guardo en localstorage del navegador
  }

  constructor() {
    console.log("Servicio Inicializado");
    this._lstAutos = JSON.parse(localStorage.getItem('autos')!) || []; //el ! es por si es nullo lo pueda tomar y el or || [] es para que si no tiene nada lo ponga vacio
  }


}
