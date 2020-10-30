import { PortadaComponent } from './componentes/portada/portada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';


const routes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full'},
  { path: 'portada', component: PortadaComponent },
  { path: 'blog', component: PostComponent },
  { path: '**', redirectTo: '/portada' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
