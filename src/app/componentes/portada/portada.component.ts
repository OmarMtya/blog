import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgwWowService } from 'ngx-wow';
import { Proyecto } from 'src/app/models/proyectos.model';
import { AppState } from 'src/app/store/app.reducer';
import { PortadaService } from '../../servicios/portada.service';
import { getProyectos } from '../../store/actions/portada.actions';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  proyectoSeleccionado: Proyecto = null;
  proyectos: Proyecto[];
  cargando = true;

  constructor(
    private proyectosService: PortadaService,
    private viewportScroller: ViewportScroller,
    private store: Store<AppState>) {
      this.store.select('portada').subscribe((data) => {
        this.cargando = data.cargando;
        this.proyectos = data.proyectos;
      });
    }

  ngOnInit() {
    // this.proyectos = this.proyectosService.getProyectos();
    this.store.dispatch(getProyectos());
  }

  proyectoSeleccionadoEvent(proyecto: Proyecto) {
    this.proyectoSeleccionado = proyecto;
  }

  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  deseleccionarProyecto() {
    this.proyectoSeleccionado = null;
  }
}
