import { PortadaComponent } from './componentes/portada/portada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';


const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'post', component: PostComponent },
  { path: '**', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
