import { PortadaComponent } from './componentes/portada/portada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';


const routes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full'},
  { path: 'portada', component: PortadaComponent },
  { path: 'blog', component: EntradasComponent },
  { path: '**', redirectTo: '/portada' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
