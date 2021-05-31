import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyectos.model';
import { ViewportScroller } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-detalles-proyecto",
  templateUrl: "./detalles-proyecto.component.html",
  styleUrls: ["./detalles-proyecto.component.scss"],
})
export class DetallesProyectoComponent implements OnInit {
  @Input() proyecto: Proyecto;
  colorClass = [
    "badge-primary",
    "badge-secondary",
    "badge-success",
    "badge-danger",
    "badge-warning",
    "badge-info",
    "badge-light",
    "badge-dark",
  ];

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    console.log(this.proyecto);
  }

  scrollToProyectos(): void {
    this.viewportScroller.scrollToAnchor('proyectos');
  }

  getImagen(url: string) {
    return `${environment.servidor}${url}`;
  }

  getColor() {
    return this.colorClass[Math.floor(Math.random() * 10)];
  }
}
