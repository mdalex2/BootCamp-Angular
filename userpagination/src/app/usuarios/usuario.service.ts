import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reques, Usuario } from './interfaces/reques';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = environment.apiUrl;
  userUrl: string = `${this.baseUrl}/users`;
  resultados: Usuario[] = [];
  totalRegistros: number = 0;
  totalRegistrosPorPagina: number = 3;

  constructor(private http: HttpClient) { }

  listarUsuarios(paginaActual: number = 0, size: number = 3) {

    const params = new HttpParams()
                        .set('page',paginaActual.toString())
                        .set('per_page',size)


    this.http.get<Reques>(this.userUrl, {params:params})
          .subscribe(resp => {
            this.resultados = resp.data;
            this.totalRegistros = resp.total;
            this.totalRegistrosPorPagina = resp.per_page;
          })
  }
}
