import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Post } from '../../models/posts.model';
import { BlogService } from '../../servicios/posts.service';
import { getPosts } from '../../store/actions/blog.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss'],
})
export class EntradasComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  suscripciones: Subscription[] = [];
  cargando = true;

  constructor(
    private store: Store<AppState>
  ) {
    const blogSuscription$ = this.store.select('blog').subscribe((data) => {
      this.cargando = data.cargando;
      this.posts = data.entradas;
    });
    this.suscripciones.push(blogSuscription$);
  }
  ngOnDestroy(): void {
    this.suscripciones.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }
}
