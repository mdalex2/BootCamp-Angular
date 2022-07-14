import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material2',
  templateUrl: './material2.component.html',
  styleUrls: ['./material2.component.css']
})
export class Material2Component implements OnInit {
  nombre: string = "Alex";
  apellido: string = "Mendoza";
  nombreCompleto: string = this.nombre + " " + this.apellido;

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
