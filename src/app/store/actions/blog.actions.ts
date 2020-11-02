import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/posts.model';

export const getPosts = createAction(
  '[Blog] Get Posts',
);

export const getPostsSuccess = createAction(
  '[Blog] Get Posts Success',
  props<{posts: Post[]}>()
);

export const getPostsFailure = createAction(
  '[Blog] Get posts Failure',
  props<{error: any}>()
);
