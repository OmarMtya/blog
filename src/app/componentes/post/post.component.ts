import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { BlogService } from '../../servicios/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  entradaIndividual = true;

  constructor(private postsService: BlogService) {}

  ngOnInit() {

  }
}
