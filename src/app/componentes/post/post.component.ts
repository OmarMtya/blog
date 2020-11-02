import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { PostsService } from '../../servicios/posts.service';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() mostrarComentarios = true;
  @Input() post: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit() {

  }
}
