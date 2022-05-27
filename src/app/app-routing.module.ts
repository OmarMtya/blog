import { PortadaComponent } from './componentes/portada/portada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';


const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'blog', component: EntradasComponent },
  { path: 'cv', component: CurriculumComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
