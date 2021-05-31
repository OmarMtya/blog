import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgwWowService } from 'ngx-wow';
import { Proyecto } from 'src/app/models/proyectos.model';
import { AppState } from 'src/app/store/app.reducer';
import { PortadaService } from '../../servicios/portada.service';
import { getProyectos } from '../../store/actions/portada.actions';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit, OnDestroy {
  proyectoSeleccionado: Proyecto = null;
  proyectos: Proyecto[];
  cargando = true;
  suscripcion: Subscription[] = [];

  constructor(
    private viewportScroller: ViewportScroller,
    private store: Store<AppState>) {
    const portada$ = this.store.select('portada').subscribe((data) => {
      this.cargando = data.cargando;
      this.proyectos = data.proyectos;
    });
    this.suscripcion.push(portada$);
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach((sus) => {
      sus.unsubscribe();
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

  getImagen(url: string) {
    return `${environment.servidor}${url}`;
  }

  deseleccionarProyecto() {
    this.proyectoSeleccionado = null;
  }
}
