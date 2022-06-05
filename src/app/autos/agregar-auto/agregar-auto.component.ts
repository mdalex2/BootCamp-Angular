import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutoService } from '../auto.service';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css']
})
export class AgregarAutoComponent implements OnInit {

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }

  campoRequerido: string = '';

  objNuevo: IAuto = {
    marca: "",
    modelo: "",
    precio: 0
  }

  // @Output()
  // onNuevoAuto: EventEmitter<IAuto> = new EventEmitter();

  agregar(){
    this.campoRequerido = '';
    if (this.objNuevo.marca === undefined || this.objNuevo.modelo === undefined || this.objNuevo.precio === 0)
    {
      this.campoRequerido = 'Debe ingresar los valores requeridos';
      return;
    }
    //this.onNuevoAuto.emit(this.objNuevo); //con esto se envia al componente padre
    //podemos ahora trabajar directo con el servicio
    this.autoService.agregarAuto(this.objNuevo);
    this.objNuevo = { marca: '', modelo: '', precio: 0 }; //inicializo un objeto default para limpiar la variable

  }
}
