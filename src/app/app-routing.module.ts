import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';


const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: '', component: PostComponent },
  { path: '**', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
