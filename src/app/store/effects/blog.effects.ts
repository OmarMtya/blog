import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as blog from '../actions/blog.actions';
import { BlogService } from '../../servicios/posts.service';
import { Post } from '../../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private blogService: BlogService) {}

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(blog.getPosts),
        switchMap(() =>
          this.blogService.getPosts().pipe(
            map((data: Post[]) => blog.getPostsSuccess({ posts: data })),
            catchError(error => of(blog.getPostsFailure({ error }))))
          ),
    );
  });
}
