import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.model';
import { ProyectosService } from '../../servicios/proyectos.service';
@Component({
  selector: "app-portada",
  templateUrl: "./portada.component.html",
  styleUrls: ["./portada.component.scss"],
})
export class PortadaComponent implements OnInit {
  proyectoSeleccionado: Proyecto = null;
  proyectos: Proyecto[];

  constructor(
    private proyectosService: ProyectosService,
    private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.proyectos = this.proyectosService.getProyectos();
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
