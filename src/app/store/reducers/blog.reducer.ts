import { createReducer, on } from '@ngrx/store';
import * as blog from '../actions/blog.actions';
import { Post } from '../../models/posts.model';

export interface BlogState {
  cargando: boolean;
  entradas: Post[];
  error: any;
}

const initialState: BlogState = {
  cargando: false,
  entradas: [],
  error: null
};

const _blogReducer = createReducer(
  initialState,
  on(blog.getPosts, (state) => ({
    ...state,
    cargando: true,
    error: null
  })),
  on(blog.getPostsSuccess, (state, { posts }) => ({
    ...state,
    cargando: false,
    entradas: [...posts]
  })),
  on(blog.getPostsFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  }))
);

export function blogReducer(state, action) {
    return _blogReducer(state, action);
}
