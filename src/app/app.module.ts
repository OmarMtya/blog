import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './componentes/post/post.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { ComentarioComponent } from './componentes/post/comentario/comentario.component';
import { PortadaComponent } from './componentes/portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    ComentarioComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
