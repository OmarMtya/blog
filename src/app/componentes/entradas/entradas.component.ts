import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts.model';
import { PostsService } from '../../servicios/posts.service';

@Component({
  selector: "app-entradas",
  templateUrl: "./entradas.component.html",
  styleUrls: ["./entradas.component.scss"],
})
export class EntradasComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .toPromise()
      .then((data: Post[]) => {
        this.posts = data;
        console.log(data);
      });
  }
}
