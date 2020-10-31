import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './componentes/post/post.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { ComentarioComponent } from './componentes/post/comentario/comentario.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ListaPostComponent } from './componentes/shared/lista-post/lista-post.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';
import { DetallesProyectoComponent } from './componentes/portada/detalles-proyecto/detalles-proyecto.component';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    ComentarioComponent,
    PortadaComponent,
    ListaPostComponent,
    FooterComponent,
    SafePipe,
    DetallesProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
