import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.model';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  proyectos: Proyecto[] = [
    {
      titulo: 'Orb',
      descripcion: 'Descripción de orb',
      descripcionCorta:
        'Videojuego acerca de teoría de cuerdas y la transformación de la energía.',
      fecha: new Date(),
      imagenes: ['assets/images/orb.jpg'],
      categorias: ['Programación', 'Videojuegos', 'Móvil'],
    },
    {
      titulo: 'Locus',
      descripcion: 'Descripción de Locus',
      descripcionCorta:
        'Aplicación móvil hibrida. Geolocalización de bienes y personas en tiempo real.',
      fecha: new Date(),
      imagenes: [
        'https://i.imgur.com/GpCMaf3.png',
        'https://i.imgur.com/7pXZTaC.png',
      ],
      categorias: ['Diseño', 'Programación', 'Móvil'],
    },
    {
      titulo: 'Rock Paper Pixel',
      descripcion: 'Descripción de Rock paper pixel',
      descripcionCorta:
        'Rock Paper Pixel es un videojuego de plataforma web basado en el juego Piedra Papel o Tijera, juego en tiempo real, multiplayer.',
      fecha: new Date(),
      link: 'http://omarmtya.com/rps',
      imagenes: ['https://i.imgur.com/SSJ3BGC.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Bot de Discord',
      descripcion: 'Descripción de Bot de Discord',
      descripcionCorta:
        'Generé un Bot de Discord de hobby. Permite listas de reproducción basadas en vídeos de Youtube y botonera de sonidos.',
      fecha: new Date(),
      imagenes: [
        'https://cdn.oneesports.gg/wp-content/uploads/2020/03/Discord-1024x576.jpg',
      ],
      categorias: ['Diseño', 'Programación'],
    },
    {
      titulo: 'Engine.js',
      descripcion: 'Descripción de Engine.js',
      descripcionCorta:
        'Engine.js es una librería de manejo y vectorización de figuras en 2D web. Optimizado para ser un motor de videojuegos basados en Canvas HTML5 de Web.',
      fecha: new Date(),
      // imagenes: [''],
      video: 'https://www.youtube.com/embed/5sLzi5nNKdE',
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Modul Tech',
      descripcion: 'Descripción de Transnorte',
      descripcionCorta:
        'Empresa planificada para ventas de módulos desarrollados para manejo de empresas y soluciones empresariales.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/RanIs73.png'],
      categorias: ['Diseño', 'Ideas'],
    },
    {
      titulo: 'Key Place',
      descripcion: 'Descripción de Key Place',
      descripcionCorta:
        'Mesas interactivas para la comanda de restaurantes. Incluyen videojuegos, lector de revistas, presentador de diapositivas y más.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/ih3sBGe.jpg'],
      categorias: ['Programación', 'Trabajo'],
    },
    {
      titulo: 'Api Color',
      descripcion: 'Descripción de Api Color',
      descripcionCorta: 'Generación de paletas de colores según la temática de tu proyecto, basado en la teoría del color.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/xMn80f1.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Key Publicity',
      descripcion: 'Descripción de Key Publicity',
      descripcionCorta: 'Desarrollo completo para totems interactivos de publicidad. Estos son totalmente personalizables y manejados remotamente.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/KNYXT4a.png','https://i.imgur.com/kUoyHX8.png'],
      categorias: ['Diseño', 'Programación', 'Trabajo'],
    },
    {
      titulo: 'Nom-035',
      descripcion: 'Descripción de Nom 35',
      descripcionCorta: 'Plataforma digital para el manejo de la Normativa 035 en México.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/EBtLXCb.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Encuestas dinámicas',
      descripcion: 'Descripción de Encuestas',
      descripcionCorta: 'Plataforma web para la creación de encuestas totalmente personalizadas.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/9XBpdo1.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Juego de Cartas',
      descripcion: 'Descripción de Juego de Cartas',
      descripcionCorta: 'Videojuego generado por cartas y decisiones basadas en dos opciones. Basado en el juego de "Reigns"',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/o7Ae3D6.png'],
      categorias: ['Diseño', 'Programación', 'Videojuego'],
    },
    {
      titulo: 'Transnorte',
      descripcion: 'Descripción de Transnorte',
      descripcionCorta: 'Transnorte es una empresa de transporte internacional en el norte de la república mexicana. Se le hizo una plataforma completa y personalizada para el manejo de recursos y bienes tanto humanos como materiales.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/uCPb5mL.png'],
      categorias: ['Diseño', 'Programación', 'Móvil', 'Trabajo', 'Web'],
    },
    {
      titulo: 'xChange',
      descripcion: 'Descripción de Transnorte',
      descripcionCorta: 'Aplicación móvil para Android y iPhone. Herramienta para axuliar procesos de compra y venta de divisas en Ciudad Juárez.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/QyTVlHC.png', 'https://i.imgur.com/FbaR2Wc.png'],
      categorias: ['Programación', 'Móvil', 'Trabajo'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
