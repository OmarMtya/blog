import { createReducer, on } from '@ngrx/store';
import * as portada from '../actions/portada.actions';
import { Proyecto } from '../../models/proyectos.model';

export interface PortadaState {
  cargando: boolean;
  proyectos: Proyecto[];
  error: any;
}

const initialState: PortadaState = {
    cargando: false,
    proyectos: [],
    error: null
};

export const _portadaReducer = createReducer(
  initialState,
  on(portada.getProyectos, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(portada.getProyectosSuccess, (state, { proyectos }) => ({
    ...state,
    cargando: false,
    proyectos: [...proyectos]
  })),
  on(portada.getProyectosFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...state }
  }))
);

export function portadaReducer(state, action) {
    return _portadaReducer(state, action);
}
