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
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { EntradasComponent } from "./componentes/entradas/entradas.component";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducer';
import { EffectsArray } from './store/effects/index';
import { LoadingComponent } from './componentes/shared/loading/loading.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { VivoComponent } from './componentes/vivo/vivo.component';
import { SocketComponent } from './servicios/socket/socket.component';
import { MarkdownModule } from 'ngx-markdown';



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
    DetallesProyectoComponent,
    EntradasComponent,
    LoadingComponent,
    CurriculumComponent,
    VivoComponent,
    SocketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(EffectsArray),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
