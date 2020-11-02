import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as portada from '../actions/portada.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PortadaService } from '../../servicios/portada.service';
import { of } from 'rxjs';
import { Proyecto } from '../../models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class PortadaEffects {
  constructor(
    private actions$: Actions,
    private portadaService: PortadaService) {}

  getProyectos$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(portada.getProyectos),
        switchMap(() =>
          this.portadaService.getProyectos().pipe(
            map((data: Proyecto[]) => portada.getProyectosSuccess({ proyectos: data })),
            catchError(error => of(portada.getProyectosFailure({ error }))))
          ),
    );
  });

}
