import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  getProyectos(){
    return [
    {
      titulo: 'Orb',
      descripcion: 'Orb fue un proyecto realizado en Unity, desarrollado para móviles con la ídea de ser utilizado tanto en Android como en iPhone. Desarrollado a la par junto con Franco Bonechi.',
      descripcionCorta:
        'Videojuego acerca de teoría de cuerdas y la transformación de la energía.',
      fecha: new Date(),
      imagenes: ['assets/images/orb.jpg'],
      categorias: ['Programación', 'Videojuegos', 'Móvil'],
    },
    {
      titulo: 'Locus',
      descripcion: 'Locus es una aplicación generada en Ionic para su puesta en producción en iPhone, Android y versión de escritorio. Esta fue desarrollada y diseñada dos veces; la primera fue con la colaboración de Ericka Sanchez, la segunda fue un rediseño propio. La aplicación es para localización de personas o bienes materiales en tiempo real, al momento de que el bien se mueve de lugar, la aplicación reacciona y actualiza las coordenadas en el mapa.',
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
      descripcion: 'El proyecto más reciente. Este es un videojuego en web basado en Piedra Papel o Tijera, está hecho con Angular, Socket.io y Mysql',
      descripcionCorta:
        'Rock Paper Pixel es un videojuego de plataforma web basado en el juego Piedra Papel o Tijera, juego en tiempo real, multiplayer.',
      fecha: new Date(),
      link: 'http://omarmtya.com/rps',
      imagenes: ['https://i.imgur.com/SSJ3BGC.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Bot de Discord',
      descripcion: 'Se generó un Bot de Discord por diversión, este permite la reproducción de listas de reproducción y vídeos individuales para los participantes de una sala de chat de Discord. Planeo próximamente incluír un juego de adivinar la canción con el mismo bot. Creado con Node.js y Discord.js',
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
      descripcion: 'Se generó una librería para el manejo del Canvas de HTML5 con Javascript, este incluye motor de física, motor de audio, reproductor de sprites entre otras cosas. En el vídeo lo explica todo. Creado con Javascript, HTML y CSS vanilla.',
      descripcionCorta:
        'Engine.js es una librería de manejo y vectorización de figuras en 2D web. Optimizado para ser un motor de videojuegos basados en Canvas HTML5 de Web.',
      fecha: new Date(),
      // imagenes: [''],
      video: 'https://www.youtube.com/embed/5sLzi5nNKdE',
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Modul Tech',
      descripcion: 'Modul Tech es una idea a partir de las materias de Formación Empresarial y Estrategias de Mercado y Web. Esta es una idea de ventas de módulos de software ya generados anteriormente.',
      descripcionCorta:
        'Empresa planificada para ventas de módulos desarrollados para manejo de empresas y soluciones empresariales.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/RanIs73.png'],
      categorias: ['Diseño', 'Ideas'],
    },
    {
      titulo: 'Key Place',
      descripcion: 'Key Place es un restaurante localizado en Ciudad Juárez, Chihuahua, México. Para consumir hace falta sentarse en una mesa interactiva, en la cual se puede jugar, ver presentaciones dadas en el mismo restaurante, pedir para comer, ver el estatus actual de tus pedidos, entre otros. El producto está actualmente en producción y se encuentra en Plaza Bistro de Ciudad Juárez. Fue realizado por el equipo de Key Innovation durante el año de 2018-2019 y actualmente en mantenimiento. Hecha con Angular, Socket.io, Mysql y HammerJs que hace posible el uso de Multitouch',
      descripcionCorta:
        'Mesas interactivas para la comanda de restaurantes. Incluyen videojuegos, lector de revistas, presentador de diapositivas y más.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/ih3sBGe.jpg'],
      categorias: ['Programación', 'Trabajo'],
    },
    {
      titulo: 'Api Color',
      descripcion: 'Es una herramienta creada para la clase de Generación de APIs, en esta se programó una interfaz web como complemento. Permite ingresar el tipo de proyecto que se está realizando y basado en la teoría del color, dar varias opciones de paletas de colores. Te guarda tus proyectos y las paletas de colores que seleccionaste. Creado con Angular, Nodejs, Express y MongoDB.',
      descripcionCorta: 'Generación de paletas de colores según la temática de tu proyecto, basado en la teoría del color.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/xMn80f1.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Key Publicity',
      descripcion: 'Se realizó un CRUD para poder manejar toda la información que se presentan en los totems publicitarios. Trabajé tanto la parte administrativa como la parte del usuario final. Está desarrollada por mí para el equipo de Key Innovation.',
      descripcionCorta: 'Desarrollo completo para totems interactivos de publicidad. Estos son totalmente personalizables y manejados remotamente.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/KNYXT4a.png','https://i.imgur.com/kUoyHX8.png'],
      categorias: ['Diseño', 'Programación', 'Trabajo'],
    },
    {
      titulo: 'Nom-035',
      descripcion: 'Se desarrolló una plataforma digital actualmente en producción para una empresa privada. Esta requisitó una plataforma con la posiblidad de desarrollar las evaluaciones de la Nom-035 en México, desgloza los resultados y tiene un sin límite de evaluaciones posibles para empresas de gran cantidad de empleados. Generado con PHP y Mysql.',
      descripcionCorta: 'Plataforma digital para el manejo de la Normativa 035 en México.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/EBtLXCb.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Encuestas dinámicas',
      descripcion: 'Se desarrolló una plataforma digital, actualmente en producción para una empresa privada. Esta requisitó un producto que diera la posibilidad de generar evaluaciones de forma dinámica y totalmente personalizables. Se realizó con PHP y Mysql.',
      descripcionCorta: 'Plataforma web para la creación de encuestas totalmente personalizadas.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/9XBpdo1.png'],
      categorias: ['Diseño', 'Programación', 'Web'],
    },
    {
      titulo: 'Juego de Cartas',
      descripcion: 'De mis primeros proyectos antes de trabajar profesionalmente. Este se basa en el juego "Reigns", se les da una pregunta o una situación al jugador y tiene que elegir entre dos, todas las elecciones afectan a los stats del juego, la idea es terminar la historia que se presenta. Se desarrolló con PHP.',
      descripcionCorta: 'Videojuego generado por cartas y decisiones basadas en dos opciones. Basado en el juego de "Reigns"',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/o7Ae3D6.png'],
      categorias: ['Diseño', 'Programación', 'Videojuego'],
    },
    {
      titulo: 'Transnorte',
      descripcion: 'Transnorte ha sido el trabajo que más me ha dado de comer. He trabajado en él hace 3 años, la mayoría de los módulos de producción son realizados por mí y actualmente le doy mantenimiento. Generado por parte de Key Innovation. Desarrollado con PHP y Mysql.',
      descripcionCorta: 'Transnorte es una empresa de transporte internacional en el norte de la república mexicana. Se le hizo una plataforma completa y personalizada para el manejo de recursos y bienes tanto humanos como materiales.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/uCPb5mL.png'],
      categorias: ['Diseño', 'Programación', 'Móvil', 'Trabajo', 'Web'],
    },
    {
      titulo: 'xChange',
      descripcion: 'xChange fue mi primera aplicación móvil. A este momento no sabía desarrollar en móvil ni las posibilidades que tenían otras tencnologías. Se desarrolló nativamente y el proceso de desarrolló tomó apróximadamente tres meses el desarrollo de este; para mandar a producción y los cambios que pedían, el proceso duró 1 año. Desarrollado con Java.',
      descripcionCorta: 'Aplicación móvil para Android y iPhone. Herramienta para axuliar procesos de compra y venta de divisas en Ciudad Juárez.',
      fecha: new Date(),
      imagenes: ['https://i.imgur.com/QyTVlHC.png', 'https://i.imgur.com/FbaR2Wc.png'],
      categorias: ['Programación', 'Móvil', 'Trabajo'],
    },
  ];
  }
}
