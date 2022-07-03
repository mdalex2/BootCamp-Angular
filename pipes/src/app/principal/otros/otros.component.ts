import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {

  nombre: string = "Alex";
  genero: string = "M";

  bienvenidoMap = {
    'M': "Bienvenido",
    'F': "Bienvenida",
  }

  usuarios : string[] = ["Alex", "Leo", "Lupe"];
  usuariosMap = {
    "=0": "No hay usuarios en linea",
    "=1": "Hay un usuario en línea",
    "=2": "Tenemos 2 usuarios en línea",
    "other": "Tenemos # usuarios en línea"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
