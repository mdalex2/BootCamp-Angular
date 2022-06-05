import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }

  agregarNuevoAuto(auto: IAuto)
  {
    //this.lstAutos.push(auto);
  }
}
