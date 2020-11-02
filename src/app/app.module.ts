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
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { EntradasComponent } from "./componentes/entradas/entradas.component";
import { MarkdownModule } from "ngx-markdown";

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.url, // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: "#000000",
      text: "#ffffff",
      link: "#ffffff",
    },
    button: {
      background: "#ffc25c",
      text: "#000000",
      border: "transparent",
    },
  },
  content: {
    message: "Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta el uso de ellas.",
    dismiss: "Lo entiendo",
    deny: "Declinar",
    link: "Conocer más",
    href: "https://cookiesandyou.com",
    policy: "Cookie Policy",
    header: "Cookies siendo utilizadas en el sitio",
    allow: "Aceptar cookies"
  },
  position: "bottom-right",
  theme: "classic",
  type: "opt-out",
};


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
    EntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
