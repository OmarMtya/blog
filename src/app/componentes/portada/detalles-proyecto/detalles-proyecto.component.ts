import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyectos.model';

@Component({
  selector: "app-detalles-proyecto",
  templateUrl: "./detalles-proyecto.component.html",
  styleUrls: ["./detalles-proyecto.component.scss"],
})
export class DetallesProyectoComponent implements OnInit {
  @Input() proyecto: Proyecto;
  colorClass = [
    'badge-primary',
    'badge-secondary',
    'badge-success',
    'badge-danger',
    'badge-warning',
    'badge-info',
    'badge-light',
    'badge-dark'
  ];

  constructor() {}

  ngOnInit(): void {
  }

  getColor() {
    return this.colorClass[Math.floor(Math.random() * 10)];
  }
}
