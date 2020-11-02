import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyectos.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  constructor(private http: HttpClient) { }

  getProyectos(){
    return this.http.get(`${environment.servidor}/proyectos`);
  }
}
