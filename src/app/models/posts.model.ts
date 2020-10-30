import { Comentario } from './comentarios.model';

export class Post {
  categoriapost: CategoriaPost;
  titulo: string;
  descripcion: string;
  contenido: string;
  comentarios: Comentario[];
  autor: {nombre: string, id: number};
  created_at: Date;
}

class CategoriaPost {
  id: number;
  contenido: string;
}
