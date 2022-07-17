import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id','avatar','first_name', 'last_name','email'];

  constructor(private usuarioSrv: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioSrv.listarUsuarios();
  }

  get resultados(){
    return this.usuarioSrv.resultados;
  }

  get totalRegistros() {
    return this.usuarioSrv.totalRegistros;
  }

  get totalRegistrosPorPagina() {
    return this.usuarioSrv.totalRegistrosPorPagina;
  }

  onPaginadoChange(event: PageEvent){
    let paginaActual = event.pageIndex;
    let size = event.pageSize;
    paginaActual++;
    this.usuarioSrv.listarUsuarios(paginaActual,size);
  }

}
