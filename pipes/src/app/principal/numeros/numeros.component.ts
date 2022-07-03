import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  totalVentas: number = 255555555555.25555555;
  porcentajeVenta : number = 0.25;
  constructor() { }

  ngOnInit(): void {
  }

}
