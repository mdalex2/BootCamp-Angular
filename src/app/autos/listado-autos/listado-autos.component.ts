import { Component, Input, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent implements OnInit {

  @Input()
  lstAutos: IAuto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
