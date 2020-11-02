import { createAction, props } from '@ngrx/store';
import { Proyecto } from '../../models/proyectos.model';

export const getProyectos = createAction(
  '[Portada] Get Proyectos',
);

export const getProyectosSuccess = createAction(
  '[Portada] Get Proyectos Success',
  props<{ proyectos: Proyecto[] }>()
);

export const getProyectosFailure = createAction(
  '[Portada] Get Proyectos Failure',
  props<{ error: any }>()
);
