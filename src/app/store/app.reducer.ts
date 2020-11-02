import { ActionReducerMap } from '@ngrx/store';
import { BlogState, blogReducer } from './reducers/blog.reducer';
import { portadaReducer, PortadaState } from './reducers/portada.reducer';

export interface AppState {
  blog: BlogState;
  portada: PortadaState;
}

export const appReducers: ActionReducerMap<AppState> = {
  blog: blogReducer,
  portada: portadaReducer
};
