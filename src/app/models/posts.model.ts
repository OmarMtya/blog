import { Comentario } from './comentarios.model';

export class Post {
  categoriapost: CategoriaPost;
  titulo: string;
  descripcion: string;
  contenido: string;
  comentarios: Comentario[];
  autor: {nombre: string, id: number};
  createdAt: Date;
}

class CategoriaPost {
  id: number;
  contenido: string;
}
